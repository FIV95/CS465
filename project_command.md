# MAIN COMMANDS

### `npm init -y`
### `npm install express`

## Mongo

`sudo pacman -S --needed git base-devel`

`git clone https://aur.archlinux.org/yay.git`
`cd yay`
`makepkg -si`
`cd ..`
`yay -S mongodb-bin`
`sudo systemctl enable --now mongodb.service`

## Managing Mongo
`sudo systemctl status mongodb.service`
`journalctl -u mongodb.service -f`
`sudo systemctl stop mongodb.service`

## Angular
`npm install -g @angular/cli`
