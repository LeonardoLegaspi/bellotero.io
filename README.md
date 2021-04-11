# WELCOME TO BELLOERO.IO

Bellotero.io is the digital solution that gives you fast, accurate, automated accounts
payable and smart, business-transforming insights.

# READY TO TRY BELLOTERO.IO?

Let's begin.
The first thing you need to do is get the code. For this, make a folder in your computer, open a CLI in the location of the folder you just created and hold on thight. Run this command in the CLI:

```bash
git init
git clone https://github.com/LeonardoLegaspi/bellotero.io
cd bellotero.io
```

Awesome! you've got the project.

Now, you just have to build it and run it. To do this run the following command in the CLI:

```bash
docker build -t bellotero-react .
```

You're almost there.
Next, fire up the project with the CLI command bellow and go to your browser in your local port 2001:

```bash
docker run -p 2001:80 bellotero-react
```

_Note: Be aware that the port 2001 in your localhost must be available._

# SYSTEM REQUIREMENTS

To run Bellotero.io in your computer you'll need Docker and Git installed and in your path.

### Happy Hacking!
