import { Ref, h, ref } from 'vue';

export const HandleIconHook = (menuStr: string) => {
  const menu = JSON.parse(menuStr);

  menu.forEach(item => {
    if (item.icon) {
      item.icon = h('span', { class: 'icon iconfont', innerHTML: item.icon });
    }

    if (item.children) {
      item.children.forEach(child => {
        if (child.icon) {
          child.icon = h('span', { class: 'icon iconfont', innerHTML: child.icon });
        }
      });
    }
  });

  return menu;
}

export const HandleHorizontalHook = (menuStr: string) => {
  const menu = JSON.parse(menuStr)
  menu.forEach(item => {
    if (item.href) {
      item.label = h('a', { href: item.href, target: '_blank' }, item.label);
    }
    if (item.icon) {
      item.icon = h('span', { class: 'icon iconfont', innerHTML: item.icon });
    }
    if (item.url) {
      if (item.label == "User") {
        item.icon = h('img', { src: item.url, alt: '', class: 'myAvatar' })
      }
    }
    if (item.children) {
      item.children.forEach(child => {
        if (child.icon) {
          child.icon = h('span', { class: 'icon iconfont', innerHTML: child.icon });
        }
      });
    }
  });
  return menu
}