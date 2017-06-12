(function(_) {

    _.MODULE(function() {


        var coll = _.collection.create;
        var style = new coll('style', { id: 'skeleton-app-styles' });

        //style.importLink('https://raw.github.com/daneden/animate.css/master/animate.css');


        style.setSheet({





            // DIALOG PENCERESİ
            '#skeleton-dialog-shadow': {
                'position': 'fixed',
                'z-index': '9999999',
                'background-color': '#000',
                'left': '0px',
                'top': '0px',
                'bottom': '0px',
                'right': '0px',
                'opacity': '0.2',
                'display': 'none',
                'transition': 'all .3s linear'
            },
            '#skeleton-dialog': {
                'position': 'fixed',
                'z-index': '9999999',
                'min-width': '200px',
                'background-color': 'white',
                'box-shadow': '4px 4px 11px #777',
                'transform': 'translateX(-50%) translateY(-50%)',
                'left': '50%',
                'top': '50%',
                'display': 'none',
                'transition': 'all .3s linear',
                'border-top': '10px solid #588690',
            },
            '#skeleton-dialog *': {
                'font-family': 'arial',
                'font-size': '15px',
                'color': '#444'
            },
            '#skeleton-dialog-content': {
                'padding': '30px',
            },
            '#skeleton-dialog-footer': {
                'border-top': '1px solid #ddd',
                'text-align': 'center',
                'padding': '10px'
            },
            '#skeleton-dialog-button1': {
                'background-color': '#317eb5',
                'color': 'white'
            },
            '#skeleton-dialog-button2': {
                'background-color': '#a0a0a0',
                'color': 'white'
            },
            '.skeleton-dialog-button': {
                'cursor': 'pointer',
                'display': 'inline-block',
                'width': '50%',
                'box-sizing': 'border-box',
                'padding': '7px 14px',
                '-webkit-appearance': 'button',
                'border': '1px solid #fff',
                'border-radius': '4px',
                'font-weight': 'bold',
                'outline': 'none'
            },
            '.skeleton-dialog-button:hover': {
                'background-color': '#444 !important'
            },
            '.disabled-btn': {
                'pointer-events': 'none !important',
                'opacity': '0.4',
                'background-color': '#888 !important',
                'color': '#444 !important'
            },

            //....................................................................................



            // CONTEXT PENCERESİ

            '#contextmenu-container': {
                'position': 'absolute',
                'z-index': '10000',
                'box-shadow': '0 0 0 10px rgba(0, 0, 0, 0.42)',
                'background-color': '#eee',
                'min-width': '200px',
                'padding': '10px',
                'font-size': '14px',
                'font-family': 'Arial',
                'left': '0',
                'top': '0',
                'display': 'none'
            },
            '#contextmenu-content': {},
            '#contextmenu-content > div': {
                'border-bottom': '1px solid #ddd',
                'transition': 'all .3s linear'
            },
            '#contextmenu-content > div > label': {
                'display': 'inline-block',
                'padding': '7px 10px'
            },
            '#contextmenu-content > div::before': {
                'content': "''",
                'background-color': '#317eb5',
                'display': 'inline-block',
                'transition': 'width .2s linear',
                'height': '10px',
                'width': '0',
            },
            '#contextmenu-content > div:hover::before': {
                'width': '4px'
            },
            '#contextmenu-content > div:last-child': {
                'border': '0'
            },

            //....................................................................................



            // SKELETON MENU PENCERESİ
            '.skeleton-menu-item': {
                'transition': 'all .3s linear',
                'overflow': 'hidden',
                'padding': '0',
                'margin': '0',
                'border': '0',
                'border-bottom-width': '1px',
                'border-style': 'solid',
                'border-color': '#f1f1f1',
                'display': 'table',
                'width': '100%',
                'padding': '5px'
            },
            '.skeleton-menu-item:hover': {
                'background-color': '#eee'
            },
            '.skeleton-menu-item li': {
                'box-sizing': 'border-box',
                'display': 'table-cell',
                'vertical-align': 'middle',
                'padding-top': '10px',
                'padding-bottom': '10px',
                'text-align': 'center'
            },
            '.skeleton-menu-item li:last-child': {
                'text-align': 'left',
                'padding-left': '10px'
            },
            '.skeleton-menu-item input[type=checkbox]': {

            },
            '.skeleton-menu-item .menu-item-img': {
                'box-shadow': 'inset 0px 0px 4px #777, 1px 1px 3px #ccc',
                'background': '#fff',
                'border-radius': '5px',
                'transition': 'all .3s linear',
                'cursor': 'pointer',
            },
            '.skeleton-menu-item .menu-item-img:hover': {
                'box-shadow': '1px 1px 3px #000'
            },
            '.skeleton-menu-item .menu-item-text': {

            },
            '.skeleton-menu-item .menu-item-chk': {

            },
            '.skeleton-menu-item .menu-item-img > img': {
                'pointer-events': 'none'
            },
            '.skeleton-menu-item .menu-item-img.menu-item-locked': {
                'pointer-events': 'none',
                'border': '0',
                'box-shadow': 'none',
                'opacity': '0.3'
            },


            // POPUP PENCERESİ
            '@keyframes skeleton-popup-modal': {
                'from': "{ opacity: 0}",
                'to': "{ opacity: 1}",
            },

            // TOOLTIP PENCERESİ
            '#skeleton-tooltip': {
                'position': 'absolute',
                'background-color': '#f9f9d5',
                'border-width': '1px',
                'border-style': 'solid',
                'border-color': '#ffd383',
                'border-radius': '4px',
                'box-shadow': '1px 1px 3px #777',
                'font-size': '16px',
                'font-family': 'Arial',
                'transition': 'all .2s linear',
                'display': 'none',
                'padding': '10px',
                'pointer-events': 'none',
                'z-index': '9999'
            },
            '.no-animate': {
                'transition': 'none !important'
            },




            '.skeleton-popup-modal-shadow': {
                'background-color': ' rgba(0, 0, 0, .4)',
                'position': ' fixed',
                'left': ' 0',
                'right': ' 0',
                'top': ' 0',
                'bottom': ' 0'
            },

            '.skeleton-popup-modal': {
                'position': ' fixed',
                'background-color': ' white',
                'left': ' 50%',
                'top': ' 50%',
                'transform': ' translate(-50%, -50%)',
                'border': ' 2px solid #fff',
                'padding': ' 0',
                'box-shadow': ' 3px 3px 17px -3px #000',
                'animation': 'skeleton-popup-modal .5s forwards'
            },

            '@keyframes skeleton-popup-modal': {
                'from': "{ opacity: 0}",
                'to': "{ opacity: 1}",
            },

            '#modalpage *': {
                'box-sizing': ' border-box',
                'outline': ' none'
            },

            '#modalpage table': {
                'width': '100%'
            },
            '#modalpage select': {
                'padding': '5px 10px',
                'height': '30px ',
                'width': '200px',
                'border-radius': '4px'
            },

            '#modalpage .gtitle': {
                'font-size': '14px',
                'margin': '5px 0',
                'padding': '5px 14px',
                'background-color': ' #99c9d8',
                'border-radius': '4px 0 0 4px',
                'position': 'relative',
                'color': 'white',
                'display': 'inline-block',
                'width': '88px',
                'margin-right': '14px',
                'vertical-align': 'middle'
            },

            '#modalpage .gtitle::after': {
                'content': ' ',
                'border': '1px solid rgba(255, 255, 255, 0.49)',
                'position': 'absolute',
                'left': '1px',
                'top': '1px',
                'right': '2px',
                'bottom': '2px',
                'border-right': '0',
                'border-bottom': '0',
                'border-radius': '3px 1px 0 3px'
            },
            '#modalpage .gtitle::before': {
                'content': ' ',
                'border': '13px solid transparent',
                'border-left-color': '#99c9d8',
                'border-right': '0',
                'height': '0',
                'position': 'absolute',
                'right': '-12px',
                'bottom': '0px'
            },

            '#modalpage .bheader': {
                'font-size': '17px',
                'color': ' #444',
                'background': '#f1f1f1',
                'margin': '0',
                'padding': '7px'
            },

            '#modalpage .btitle': {
                'font-size': '15px',
                'color': '#555',
                'margin': '0',
                'padding': '7px',
                'background-color': '#eee'
            },

            '#modalpage tr': {},

            '#modalpage hr': {
                'border': '0',
                'height': '1px',
                'background': '#eee',
                'margin': '7px 0 10px'
            },
            '#modalpage b': {
                'display': ' block'
            },

            '#modalpage-content': {
                'max-height': '400px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'border': '1px solid #ddd',
                'border-right-color': '#cccccc',
                'border-bottom-color': '#ccc',
                'padding': '5px'
            },

            '#modalpage input[type=text],#modalpage input[type=number]': {
                'width': '100%',
                'padding': '10px',
                'border-radius': '5px',
                'border': '2px solid #ddd',
                'border-left-color': '#999',
                'border-top-color': '#999'
            },

            '#modalpage td': {
                'padding': '10px 0',
            },

            '#modalpage': {
                'font-family': 'arial',
                'color': '#444',
                'font-size': '14px'
            },

            '#modalpage .fgroup': {
                'clear': 'both',
                'padding': '8px 0',
                'border-bottom': '1px solid #eee'
            },
            '#modalpage .fgroup::before,#modalpage .fgroup::after': {
                'content': '',
                'display': 'block',
            },
            '#modalpage input[type=button]': {
                'width': '100%',
                'padding': '13px',
                'font-weight': 'bold',
                'font-size': '16px',
                'background': '#99c9d8',
                'color': 'white',
                'border': '1px solid #ddd',
                'outline': 'none'
            },

            '#modalpage .group-label-list': {
                'display': 'inline-block',
                'vertical-align': 'middle',
                'padding': '4px',
            },

            '#modalpage .group-label-list label': {
                'padding': '5px',
                'background-color': '#eee',
                'border-radius': '5px',
                'font-weight': 'bold',
                'display': 'inline-block'
            },

            '#modalpage .group-label-list label.selected': {}

        });

        style.insert(parent.document.body);

    }); // MODULE


})(Skeleton);