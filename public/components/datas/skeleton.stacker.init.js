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
                children: [
                    {
                        div: {
                            class: 'olabilir',
                            div: {
                                class: 'bencede'
                            }
                        }
                    },
                    {
                        select: {
                            class: 'olabilir',
                            items: {
                                'istanbul': 34,
                                'izmir': 35
                            },
                            change: function (e) {
                                console.log(e.target.value);
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
        var nodes = ['div', 'label', 'input', 'span', 'textarea', 'button', 'select'];
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

    function addItems(obj, data) {
        Object.keys(data).forEach(function (key) {
            var n = parent.document.createElement('option');
            n.innerHTML = key;
            n.value = data[key];
            obj.appendChild(n);
        });
    }

    function find(main, items) {
        Object.keys(items).forEach(function (key) {
            if (key == 'children')
                for (var i = 0, p = items[key]; i < p.length; i++) {
                    find(main, p[i]);
                }
            else if (key == 'style') {
                addStyle(main, items[key]);
            }
            else if (key == 'items') {
                addItems(main, items[key]);
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

    }
    var stat = false;
    find(null, data[0]);

})(SkeletonAction);