# Donation App
It is a SWE project. DonationApp is a web-based hybrid app built on [Ionic 2 Framework](www.ionicframework.com). The app is meant for the Howard University alumni.

### Status : MVP

## How to View the App
1. Install latest node ( greater than v5) and latest npm.
2. `npm install -g ionic cordova`
3. `git clone https://github.com/ashoktamang/donationApp.git`
4. `cd <path/to/project/directory>`
5. ionic serve

## How to Provide Feedback
* Just open an issue in the repo. I will look at it.

## How to Contribute to the Project
### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `donationApp:master`.
* If we suggest changes then:
  * Make the required updates.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

