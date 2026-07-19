# Provenance and Integrity

Author: Nana Sei Anyemedu
Property of: HIVE CONSULT
Case: Operation Harbour Drift (HC-2026-0442)

## Where the author and owner are recorded

The authorship and HIVE CONSULT ownership are stamped in many places, so they can be
seen from the app, the documents, or the raw files.

1. In CIPHER: load `Harbour_Drift_case.cipher.json` through Cases, then Import Case File.
   Case Overview shows the investigator, and any generated report prints it.
2. In the case file: the `case` block holds `author`, `property`, `investigator`, and
   `acknowledgement` fields.
3. In every CSV: a trailing `Provenance` column on each row reads
   "Created by Nana Sei Anyemedu | Property of HIVE CONSULT". CIPHER ignores this column.
4. In every JSON record: `_author` and `_property` fields.
5. In the mailbox and the fraudulent email: an `X-Training-Author` header, and an
   `X-Case-Owner: HIVE CONSULT` header on the email.
6. In the documents: the README, brief, and answer key all carry the attribution line.

## Tamper evidence

`MANIFEST.txt` enforces the SHA-256 hash of every evidence file, plus a manifest digest that
binds those hashes to the author and owner. `MANIFEST.sig` is a detached ed25519 signature
over the manifest, and `AUTHOR_PUBLIC_KEY.pem` is the matching public key. If any evidence
file is altered, its hash no longer matches and the signature no longer verifies.

Integrity is enforced on the evidence files only, because they are the immutable forensic
artifacts. The case file (`Harbour_Drift_case.cipher.json`) is a derived working file:
loading it into CIPHER and using Save or Export changes its internal timestamp, so it is
listed for information only and is not part of the check. That is why re-exporting the case
does not fail verification.

## How to verify

Quick, with the helper script:

    chmod +x verify.sh
    ./verify.sh

Manually:

    # 1) check the enforced evidence hashes
    awk '/BEGIN ENFORCED/{f=1;next}/END ENFORCED/{f=0}f' MANIFEST.txt | grep -E '^[0-9a-f]{64}  ' | sha256sum -c

    # 2) verify the manifest signature with the enclosed public key
    base64 -d MANIFEST.sig > manifest.sig
    openssl pkeyutl -verify -pubin -inkey AUTHOR_PUBLIC_KEY.pem -rawin -in MANIFEST.txt -sigfile manifest.sig

A successful result prints "Signature Verified Successfully".

## Honest scope

The hashes make any change to the evidence detectable. The signature proves the manifest
has not been altered since it was produced with this package. Because the signing key was
generated together with the case, the signature attests to the integrity of this package
as shipped, rather than to an external identity check. For an identity bound signature,
sign `MANIFEST.txt` with your own long term HIVE CONSULT key and distribute that public key
separately.

Created by Nana Sei Anyemedu | Property of HIVE CONSULT
