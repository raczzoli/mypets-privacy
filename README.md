# MyPets privacy website

This directory is a standalone static website prepared for GitHub Pages.

## Publish

1. Create a public GitHub repository named **mypets-privacy**.
2. Copy the contents of this directory to the repository root. The files
   **index.html**, **account-deletion.html**, **.nojekyll** and the **assets**
   directory must remain at that level.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, then **main** and **/(root)**.

The resulting URLs will be:

- Privacy Policy: https://GITHUB-USERNAME.github.io/mypets-privacy/
- Account deletion: https://GITHUB-USERNAME.github.io/mypets-privacy/account-deletion.html

## Before production

- Use HTTPS for **EXPO_PUBLIC_API_URL**.
- Configure server-log and backup rotation to match the periods stated in the
  policy.
- Add a visible in-app path for users to initiate account deletion.
- If photo GPS extraction remains enabled, declare precise location in Play
  Console Data safety and provide the required prominent in-app disclosure.
- Keep the Play Console Data safety answers consistent with the released app
  and this policy.
