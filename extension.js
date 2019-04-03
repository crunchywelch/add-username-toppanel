/*Derived from Simple-Username.  https://extensions.gnome.org/extension/807/simple-name/*/
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;

function init() {
    label = new St.Button({style_class: 'userHost-extension-format',
                           reactive: true,
                           can_focus: true,
                           x_fill: true,
                           y_fill: false,
                           track_hover: true,
                           label: GLib.get_host_name()});
}

function enable() {
    let children = Main.panel._rightBox.get_children();
    Main.panel._rightBox.insert_child_at_index(label, children.length-1);
}

function disable() {
    Main.panel._rightBox.remove_child(label);
}
