const MenubarProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

const MenubarSlots = [
    {
        name: 'start',
        description: 'Custom content before the content.'
    },
    {
        name: 'end',
        description: 'Custom content after the content.'
    },
    {
        name: 'item',
        description: 'Custom menuitem template.'
    },
    {
        name: 'baricon',
        description: 'Custom bar icon template.'
    },
    {
        name: 'submenuicon',
        description: 'Custom submenu icon template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    menubar: {
        name: 'Menubar',
        description: 'Menubar is a horizontal menu component.',
        props: MenubarProps,
        slots: MenubarSlots
    }
};
