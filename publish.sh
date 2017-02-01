#!/bin/bash

aws s3 sync --exclude '.git/*' --exclude publish.sh --exclude .gitignore --delete . s3://istrumpstillpresident.wtf

