#!/usr/bin/env bash
# Đẩy app demo lên GitHub tài khoản lamdhn. Chạy: bash push.sh
set -e
REPO="tinhgon-demo-app"                       # tên repo (tạo rỗng trên GitHub trước)
REPO_URL="https://github.com/lamdhn/${REPO}.git"
TAG="v1"

cd "$(dirname "$0")"
[ -d .git ] || git init -q
git add -A
git -c user.email="${CODER_USER_EMAIL:-lamdhn@matbao.com}" \
    -c user.name="${CODER_USER_FULL:-lamdhn}" \
    commit -q -m "init: app demo cho template tinhgon" || true
git branch -M main
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
git push -u origin main
git tag -f "$TAG" && git push -f origin "$TAG"
echo "✓ Đã push: $REPO_URL  (branch main + tag $TAG)"
