const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"],
    l = [],
    a = document.querySelector("#btnPedir"),
    n = document.querySelector("#btnDetener");
  document.querySelector("#btnNuevo");
  let d = document.querySelectorAll(".divCartas"),
    o = document.querySelectorAll("small"),
    s = (t = 2) => {
      (e = i()), (l = []);
      for (let r = 0; r < t; r++) l.push(0);
      o.forEach((e) => (e.innerText = 0)),
        d.forEach((e) => (e.innerText = "")),
        (a.disabled = !1),
        (n.disabled = !1);
    },
    i = () => {
      e = [];
      for (let l = 2; l <= 10; l++) for (let a of t) e.push(l + a);
      for (let n of t) for (let d of r) e.push(d + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    c = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : Number(t);
    },
    $ = (e, t) => ((l[t] = l[t] + c(e)), (o[t].innerText = l[t]), l[t]),
    h = (e, t) => {
      let r = document.createElement("img");
      (r.src = `assets/cartas/${e}.png`),
        r.classList.add("carta"),
        d[t].appendChild(r);
    },
    g = () => {
      let [e, t] = l;
      setTimeout(() => {
        t === e
          ? alert("Nadie gana :(")
          : e > 21
          ? alert("Computadora gana")
          : t > 21
          ? alert("Jugador gana")
          : alert("Computadora gana");
      }, 100);
    },
    f = (e) => {
      let t = 0;
      do {
        let r = u();
        (t = $(r, l.length - 1)), h(r, l.length - 1);
      } while (t < e && e <= 21);
      g();
    };
  return (
    a.addEventListener("click", () => {
      let e = u(),
        t = $(e, 0);
      h(e, 0),
        t > 21
          ? (console.warn("Lo siento mucho! Has perdido!"),
            (a.disabled = !0),
            (n.disabled = !0),
            f(t))
          : 21 === t &&
            (console.warn("21, genial"),
            (a.disabled = !0),
            (n.disabled = !0),
            f(t));
    }),
    n.addEventListener("click", () => {
      (a.disabled = !0), (n.disabled = !0), f(l[0]);
    }),
    { nuevoJuego: s }
  );
})();
