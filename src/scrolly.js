export default class Scrolly {
  constructor(el) {
    this.elParent = el;
    this.el = this.elParent.children[0];
    this.pos = 0;
    this.dir = 0;
    this.scrollTo = 0;
    this.deaf = false;
    this.max = this.el.offsetHeight - window.innerHeight;
    this.eventListeners = this.eventListeners.bind(this);
    this.scroll = this.scroll.bind(this);
    this.prevTouch = 0;
    this.device = null;

    if (window.navigator.userAgent.includes("iPhone")) {
      this.device = "mobile";
    } else if (window.navigator.userAgent.includes("Android")) {
      this.device = "mobile";
    } else if (window.navigator.userAgent.includes("iPad")) {
      this.device = "mobile";
    } else if (window.navigator.userAgent.includes("Firefox")) {
      this.device = "firefox";
    } else {
      this.device = "desktop";
    }

    this.eventListeners();
    this.scroll();
  }
  deafen() {
    this.deaf = true;
  }
  resizeScreen() {
    this.max = this.el.offsetHeight - window.innerHeight;
  }
  listen() {
    this.deaf = false;
  }
  scrollToTop() {
    this.pos = 0;
  }
  eventListeners() {
    if (this.device === "desktop") {
      window.addEventListener("mousewheel", (e) => {
        if (this.deaf) return;
        this.dir = Math.abs(e.deltaY) / e.deltaY;
        this.scrollTo += e.deltaY;

        this.scrollTo = this.limit(this.scrollTo, this.max);
        e.stopPropagation();
      });
    } else if (this.device === "mobile") {
      window.addEventListener("touchstart", (e) => {
        if (this.deaf) return;

        this.prevTouch = e.touches[0].screenY;
      });
      window.addEventListener("touchmove", (e) => {
        if (this.deaf) return;

        if (this.prevTouch !== e.touches[0].screenY) {
          this.nowTouch = e.touches[0].screenY;
          this.scrollTo += (this.prevTouch - this.nowTouch) * 2;
          this.scrollTo = this.limit(this.scrollTo, this.max);
          e.stopPropagation();
        }
        this.prevTouch = e.touches[0].screenY;
      });
    } else {
      window.addEventListener("wheel", (e) => {
        if (this.deaf) return;
        this.dir = Math.abs(e.deltaY) / e.deltaY;
        this.scrollTo += e.deltaY;

        this.scrollTo = this.limit(this.scrollTo, this.max);
        e.stopPropagation();
      });
    }
  }

  scroll() {
    requestAnimationFrame(this.scroll);

    this.pos += (this.scrollTo - this.pos) / 20;
    this.el.style.transform = `translate3d(0,${-1 * this.pos}px,0)`;
  }
  limit(min, max) {
    return Math.max(Math.min(min, max), 0);
  }
}
