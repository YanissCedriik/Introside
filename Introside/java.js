function closeTab1() {
  if (document.getElementById("Tab1").innerHTML == "") {
    openTab1();
  } else document.getElementById("Tab1").innerHTML = "";
}

function closeTab2() {
  if (document.getElementById("Tab2").innerHTML == "") {
    openTab2();
  } else document.getElementById("Tab2").innerHTML = "";
}

function closeTab3() {
  if (document.getElementById("Tab3").innerHTML == "") {
    openTab3();
  } else document.getElementById("Tab3").innerHTML = "";
}

function openTab1() {
  document.getElementById("Tab1").innerHTML = /*HTML*/ `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            scelerisque metus eget aliquet convallis. Ut pulvinar ac lacus a
            gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Maecenas tristique finibus orci sit amet
            euismod. Pellentesque nec risus quis sem rhoncus malesuada. Quisque
            scelerisque mauris vel nisl viverra, non semper sem gravida.
    `;
}

function openTab2() {
  document.getElementById("Tab2").innerHTML = /*HTML*/ `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            scelerisque metus eget aliquet convallis. Ut pulvinar ac lacus a
            gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Maecenas tristique finibus orci sit amet
            euismod. Pellentesque nec risus quis sem rhoncus malesuada. Quisque
            scelerisque mauris vel nisl viverra, non semper sem gravida.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus
            scelerisque metus eget aliquet convallis. Ut pulvinar ac lacus a
            gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Maecenas tristique finibus orci sit amet
            euismod. Pellentesque nec risus quis sem rhoncus malesuada. Quisque
            scelerisque mauris vel nisl viverra, non semper sem gravida.
    `;
}

function openTab3() {
  document.getElementById("Tab3").innerHTML = /*HTML*/ `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
  scelerisque metus eget aliquet convallis. Ut pulvinar ac lacus a
  gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices posuere cubilia curae; Maecenas tristique finibus orci sit amet
  euismod. Pellentesque nec risus quis sem rhoncus malesuada. Quisque
  scelerisque mauris vel nisl viverra, non semper sem gravida.
`;
}
