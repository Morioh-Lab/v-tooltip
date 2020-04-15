


class Tooltip {

    constructor(el, options) {

        // console.log(options);

        this.id = 't-' + Math.random().toString(16).substr(2, 9);
        this.el = el;
        this.container = document.createElement('div');
        this.events = [];
        var o = this.o = Object.assign({
            when: 'hover', // hover | click | focus
            placement: 'top', // auto | top | bottom | left | right
            offset: 0,
            content: '',
            title: '',
            html: true,
            delay: {
                show: 0,
                hide: 500
            },

            // beforeShow: null,
            // beforeHide: null,
            // afterShow: null,
            // afterHide: null

        }, options);

        switch (o.when) {
            case 'click':
                // this.el.addEventListener('click', () => this.toggle());

                //this.events.push({ 'click': () => this.toggle() });
                this.events.push(['click', () => this.toggle()]);
                break;

            case 'focus':
                // this.el.addEventListener('focus', () => this.show());
                // this.el.addEventListener('blur', () => this.hide());

                this.events.push(['focus', () => this.show()]);
                this.events.push(['blur', () => this.hide()]);
                break;


            case 'hover':
            default:
                // this.el.addEventListener('mouseover', () => this.show());
                // this.el.addEventListener('mouseout', () => this.hide());

                this.events.push(['mouseover', () => this.show()]);
                this.events.push(['mouseout', () => this.hide()]);

                this.container.addEventListener('mouseover', () => this.show());
                this.container.addEventListener('mouseout', () => this.hide());

                break;
        }

        this.events.forEach(evt => {
            this.el.addEventListener(evt[0], evt[1]);
        });

    }


    viewport(el) {
        return { top: el.offsetTop, left: el.offsetLeft, width: el.offsetWidth, height: el.offsetHeight };
    }

    show() {
        var o = this.o;

        if (!this.created) {

            this.container.id = this.id;
            this.container.className = "tt show animated tt-p-" + o.placement;
            this.container.setAttribute('x-placement', o.placement);

            // create arrow
            this.arrow = document.createElement('div');
            this.arrow.className = "tt-arrow";
            this.container.appendChild(this.arrow);

            this.tl = document.createElement('h3');
            this.tl.className = "tt-header";
            this.container.appendChild(this.tl);

            this.body = document.createElement('div');
            this.body.className = "tt-body";
            this.container.appendChild(this.body);

            document.body.appendChild(this.container);
            this.created = true;
        }

        clearTimeout(this.hideTimeout);

        // container hover
        if (this.showed) return;

        this.container.style.display = "block";
        this.tl.innerText = o.title;
        this.html(o.content);        

        // this.position();
        this.showed = true;

    }

    position() {

        var o = this.o;
        // var v = this.viewport(this.el); //this.el.getBoundingClientRect();
        // var m = this.viewport(this.container);//this.container.getBoundingClientRect();
        // var a = this.viewport(this.arrow); //this.arrow.getBoundingClientRect();

        // Scroll offset of the current document
        var ot = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var ol = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft

        var v = this.el.getBoundingClientRect();
        var m = this.container.getBoundingClientRect();
        var a = this.arrow.getBoundingClientRect();

        var t = v.top + ot;
        var l = v.left + ol;

        switch (o.placement) {

            case 'left':
                this.container.style.left = l - m.width - a.width - o.offset + 'px';
                this.container.style.top = t + (v.height - m.height) / 2 + 'px';
                this.arrow.style.top = (m.height - a.height) / 2 + 'px';
                this.removeClass(this.container, "fadeOutLeft");
                this.addClass(this.container, "fadeInLeft");

                break;

            case 'right':

                this.container.style.left = l + v.width + a.width + o.offset + 'px';
                this.container.style.top = t + (v.height - m.height) / 2 + 'px';
                this.arrow.style.top = (m.height - a.height) / 2 + 'px';
                this.removeClass(this.container, "fadeOutRight");
                this.addClass(this.container, "fadeInRight");
                break;

            case 'bottom':
                this.container.style.left = l + (v.width - m.width) / 2 + 'px';
                this.container.style.top = t + m.height + o.offset + a.height + 'px';
                this.arrow.style.left = (m.width - a.width) / 2 + 'px';
                this.removeClass(this.container, "fadeOutDown");
                this.addClass(this.container, "fadeInUp");
                break;

            case 'top':
            default:
                this.container.style.left = l + ((v.width - m.width) / 2) + 'px';
                this.container.style.top = t - m.height - o.offset - a.height + 'px';
                this.arrow.style.left = (m.width - a.width) / 2 + 'px';
                this.removeClass(this.container, "fadeOutUp");
                this.addClass(this.container, "fadeInDown");

                break;
        }
    }

    html(content) {
        if (typeof content === 'function') {

            var result = content();
            if (result && typeof result.then === 'function') {
                result.then(val => {
                    this.html(val);                    
                })
            } else {
                this.html(result);
            }

        } else {
            this.o.html ? (this.body.innerHTML = content) : (this.body.innerText = content);

            this.position();
        }
    }

    toggle() {

        if (this.showed) {
            this.hide();
        } else {
            this.show();
        }
    }

    toArray(value) {
        if (typeof value === 'string') {
            value = value.split(' ')
        }
        return value
    }


    addClass(el, classes) {
        var newClasses = this.toArray(classes);
        var lists = this.toArray(el.className);
        newClasses.forEach((newClass) => {
            if (lists.indexOf(newClass) === -1) {
                lists.push(newClass)
            }
        });
        el.className = lists.join(' ');

    }

    removeClass(el, classes) {
        var newClasses = this.toArray(classes);
        var lists = this.toArray(el.className);

        newClasses.forEach((newClass) => {
            const index = lists.indexOf(newClass)
            if (index !== -1) {
                lists.splice(index, 1)
            }
        });
        el.className = lists.join(' ');
    }

    // css(obj) {


    // }

    hide(f) {

        if (!f) {

            clearTimeout(this.hideTimeout);
            this.hideTimeout = setTimeout(() => { this.hide(1) }, this.o.delay.hide);
            return;
        }

        switch (this.o.placement) {
            case 'top':

                this.removeClass(this.container, "fadeInDown");
                this.addClass(this.container, "fadeOutUp");

                break;

            case 'bottom':

                this.removeClass(this.container, "fadeInUp");
                this.addClass(this.container, "fadeOutDown");

                break;

            case 'right':

                this.removeClass(this.container, "fadeInRight");
                this.addClass(this.container, "fadeOutRight");

                break;

            case 'left':

                this.removeClass(this.container, "fadeInLeft");
                this.addClass(this.container, "fadeOutLeft");

                break;
        }

        this.hideTimeout = setTimeout(() => { this.container.style.display = "none"; }, 800);
        this.showed = false;

    }

    dispose() {
        this.events.forEach(evt => {
            this.el.removeEventListener(evt[0], evt[1]);
        });

        document.body.removeChild(this.container);
    }



}

export default Tooltip;