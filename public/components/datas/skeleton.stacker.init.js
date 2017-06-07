/////////////////////////////////////////////////////////////////////////
//          SKELETON STACKER INIT
/////////////////////////////////////////////////////////////////////////

(function (_) {


    var data = [
        {
            div: {
                change: function () {
                    console.log('basıldı');
                },
                click: function () {

                },
                class: 'nasilsin',
                style: {
                    display: 'block',
                    textAlign: 'center'
                },
                items: [
                    {
                        div: {
                            class: 'olabilir',
                            div: {
                                class: 'bencede'
                            }
                        }
                    },
                    {
                        div: {
                            class: 'olabilir',
                            div: {
                                class: 'bencede'
                            }
                        }
                    },
                    {
                        span: {
                            class: 'olabilir',
                            div: {
                                class: 'bencede'
                            }
                        }
                    }
                ]
            }
        }
    ];

    function addStyle(obj, data) {
        Object.keys(data).forEach(function (key) {
            obj.style[key] = data[key];
        });
    }

    function onEvent(obj, key, action) {
        var list = ['change', 'click'];
        if (list.indexOf(key) != -1) {
            obj.addEventListener(key, action, false);
            return true;
        }

        return false;
    }

    function create(key) {
        var nodes = ['div', 'label', 'input', 'span', 'textarea', 'button'];
        var typename = null;
        if (key.indexOf('.') != -1) {
            var sp = key.split('.');
            key = sp[0];
            typename = sp[1];
        }

        if (nodes.indexOf(key) != -1) {
            var n = parent.document.createElement(key);
            if (typename)
                n.type = typename;
            return n;
        }

        return null;
    }

    function find(main, items) {
        Object.keys(items).forEach(function (key) {
            if (key == 'items')
                for (var i = 0, p = items[key]; i < p.length; i++) {
                    find(main, p[i]);
                }
            else if (key == 'style') {
                addStyle(main, items[key]);
            }
            else {
                var t = create(key);
                if (t) {
                    if (main)
                        main.appendChild(t);
                    find(t, items[key]);
                }
                else {
                    if (main) {
                        var res = onEvent(main, key, items[key]);
                        if (!res) {
                            main.setAttribute(key, items[key]);
                        }
                    }
                }
            }
        });
        console.log(main);
    }

    find(null, data[0]);

})(SkeletonAction);