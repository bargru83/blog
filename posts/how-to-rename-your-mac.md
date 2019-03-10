{
  "title": "How to rename your mac",
  "date": "2018-11-01",
  "tags": "['random', 'mac']",
  "draft": "false"
}
---ENDFRONTMATTER---
Recently I decided to rename my MacBook Pro from Baz's MacBook Pro to Barry's MacBook Pro. Similarly I wanted to rename my user account to 'Barry Grubb' (with a home directory of `barrygrubb`) from the previous 'Baz Grubb' (with a home directory of `bazgrubb`).

Thankfully it was pretty simple to sort out without having to clean install macOS or anything so drastic. However it's not quite as simple as just changing your name in one place, so I figured while it's all fresh in my mind, why not share it? Note the following is correct as of macOS Mojave. If you're from the future you might need to use future Google to help you out.

# Step 1, Rename your user account and home directory, and change the full name of your user account

Your user account on your Mac has an 'Account name' property, which is used to name your home directory. In my case, it was `bazgrubb`, which I wanted to change to `barrygrubb`. Your account also has a 'full name' property, which is just a text string to identify you, but you'll probably want to change that too. My full name was 'Baz Grubb', which I wanted to change to 'Bary Grubb'. To rename these properties you'll need to do the following:

- Firstly backup anything important on your machine. Like any large change to a system, the following has the potential to break things quite badly if it goes wrong.
- You can't rename an account while you're logged into it, so you'll need to log out of the account you're renaming, then log into a different admin account. If you don't have another admin account to use, you can create a new one from 'System Preferences > Users & Groups', and then remove it once you're done.
- Next, using finder go to the 'Users' folder on the startup drive. The 'Users' folder contains the home directory of the account that you're renaming. Rename that account's home directory (it can't contain any spaces). You'll then be prompted to enter the admin name and password that you used to log in.
- Go to 'System Preferences > Users & Groups'.
- Click the lock icon in the bottom-left corner, then enter the admin name and password that you used to log in again.
- From the list of users, right-click on the user that you want to rename, and choose 'Advanced Options' from the menu that appears.
- Change the 'Account name' property to match the new name that you gave the home directory in the Users folder. This has to match the home directory's name exactly or logging in to that account will fail.
- Change the 'Home folder' property to match the new name that you gave the home directory in the Users folder.
- Change the 'Full name' property to whatever you want it to be.
- Click OK, then quit 'System Preferences'.
- Restart your Mac.
- Log in to your renamed account, then verify that your files and folders are visible and that the account is all working as expected.

After doing the above I had assumed that everything was complete. I went to make a coffee, and when I can back my screensaver had popped up with "Baz's MacBook Pro" scrolling across the screen. Hmm, I'd clearly missed something.

# Step 2, rename your mac

It appears that the Mac's machine name is set when you first add a user to it, but if you later rename that user the Mac won't get renamed along with it. The place where you have to manually rename your mac isn't actually the most intuitive location to find it, but all you need to do is go to 'System Preferences > Sharing', and there you'll see a property called 'Computer Name'. Changing it here will update your Mac's name, which identifies it on networks, and yes, on screensavers too. Job done.