---
author: achimoraites
date: Tue Jun 08 2021 21:57:00 GMT+0200
excerpt: Here there are some cool tricks you can do to improve your Github Actions
image: https://images.pexels.com/photos/1181287/pexels-photo-1181287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400
tags: ['ci', 'productivity']
slug: github-actions-tips-and-tricks
title: Github actions tweaks
url: https://achimoraites.io/blog/github-actions-tips-and-tricks
---

<script context="module">
  export const prerender = true;
</script>

Here there are some cool tricks you can do to improve your Github Actions.

## Caching your packages

How many times you have re-installed all of your packages in your actions even when no packages were changed?
This is not only time consuming but it can actually cost you more money as **Github actions** are charged based on the time they actually run;
you can [have a look here](https://github.com/pricing) in case you are interested 😉

### How

To cache our modules we will use the [`actions/cache@v2`](https://github.com/actions/cache) action

Here is an example of caching npm dependencies for Linux/MacOS

```yaml
- name: Cache node_modules 📦
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**[Here you can see it in a Github Action used for deploying this blog to gh-pages](https://github.com/achimoraites/achimoraites.github.io/blob/master/.github/workflows/deploy-gh.yaml#L24-L31)** 🚀

## Create strings based on env variables

There are times where you need to be able to create a string based on env variables.
The most common case is when you want to create a path using one or more env variables;

### How

```yaml
name: paths-printer 🦄

env:
  BASE_URL: "https://example.com/"
jobs:
  print-stuff:
    runs-on: ubuntu-latest
    steps:
	  - name: Create paths from env variables
	    # this outputs "IMAGES_PATH: https://example.com/assets/img/"
	    run:  echo  "IMAGES_PATH: ${env.IMAGES_PATH}"
	    env:
	      IMAGES_PATH: "${{ env.BASE_URL }}assets/img/"
```

## Use a custom npm config

This is very handly when you are working with private packages 📦

The idea is to store your PAT TOKEN for accessing your packages in your repository secrets and then use it on a custom npm config file.

> 📝Note that we can just use the default `.npmrc` but it is a good idea to keep the npm config for your github actions separated.

### How

In order for it to work we need to:

1. Create an npm config file 🦄
   - includes the configuration for our private github packages
   - we will take the PAT TOKEN from an env variable
   - we can name it anything that we want
   - place it in the project root folder
2. set our action to use our npm config file ✨
3. Generate a PAT TOKEN
4. Place the PAT TOKEN in our repository secrets

Lets have a look at a case where we are using private github packages

1. **Create the npm config file**

Create a file named `.ci.npmrc` in the root folder of your project and place the following contents:

```
@your-scope:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

> 💡 Remember to replace "@your-scope" with your scope

2. **Set the action to use our custom npm config file**

```yaml
- name: Install dependencies ✨
  run: npm ci
  env:
    NPM_CONFIG_USERCONFIG: .ci.npmrc
    NODE_AUTH_TOKEN: ${{ secrets.PAT_TOKEN }}
```

3. Create your PAT TOKEN
   Follow the [instructions here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   When you are on the step 7 permissions and scopes:

- make sure to select the "write:packages" option!
- the "read:packages" is enabled as well
  ![Github pat scopes](/images/blog/github-actions-tips-and-tricks/pat-creation.webp)
- Continue to the next steps and keep your PAT TOKEN ready!

4. **Place the PAT TOKEN to your repo secrets**
   Go to your repository on github:
   1. Click on "⚙️settings" tab
   2. Select "Secrets"
   3. Click on "New repository secret"
   4. Set the "name" to be "**PAT_TOKEN**"
   5. Paste your token in the "value"
   6. Select "Add secret"

![Github add secret](/images/blog/github-actions-tips-and-tricks/add-repo-secret.webp)


### Summary 👨🏻‍💻
We have explored ways to improve the performance of our github actions using caching.

Then we explored how we can create strings dynamically from env variables and finnaly we had a look in configuring our npm config for using private github packages in a secure and scalable way 😉.

Happy coding 😄 !!!

