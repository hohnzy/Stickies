# Stickies

[![Join the chat at https://gitter.im/hohnzy/Stickies](https://badges.gitter.im/hohnzy/Stickies.svg)](https://gitter.im/hohnzy/Stickies?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Learning project for freeCodeCamp




Postup jak commitovat zmeny na GitHub:
1. je třeba být v repozitáři . Pohyb mezi adresáři pomocí příkazu 'cd'
milangit:~/workspace/Stickies (master) $ 

2. vytvoř dávku změn příkazem 'git add .'
3. commitni změny do lokálního Git repozitáře na c9 pomocí 'git commit -m "nějaká výstižná hláška popisující změny"'
4. odešli změny i na GitHub pomocí 'git push' (je potřeba zadat své username a heslo na GitHubu)

Změny prováděj v souborech zásadně na c9  a pak je commituj výše uvedeným postupem. Zabráníš tak konfliktům verzí.


Postup jak vytvořit na GitHubu project page:
1. na GitHubu je třeba vytvořit branch která se musí jmenovat "gh-pages"
2. do lokálního repository na c9 se stáhne pomocí "git pull"
3. pak je třeba se přehodit do této větve pomocí "git checkout gh-pages" aby příkazový řádek vypadal nějak takto "milangit:~/workspace/Stickies (gh-pages) $ "
4. pak se již provede standardní commit pomocí příkazů viz postup výše.
5. na GitHubu se projekt objeví na url http(s)://<username>.github.io/<projectname> tedy v našem případě na http://hohnzy.github.io/Stickies/
