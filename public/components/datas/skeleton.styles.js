(function (_) {

    _.MODULE(function () {


        var coll = _.collection.create;
        var style = new coll('style', { id: 'skeleton-app-styles' });
        var link = new coll('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' })
            .insert(parent.document.head);



        //....................................................................................




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
                'text-align': 'center'
            },
            '#skeleton-dialog-title': {
                'text-align': 'center',
                'padding': '10px 0',
                'border-bottom': '1px solid #ddd',
                'background': '#eee',
                'font-weight': 'bold'
            },
            '#skeleton-dialog-footer': {
                'border-top': '1px solid #ddd',
                'text-align': 'center',
                'padding': '10px'
            },
            '#skeleton-dialog-button1': {
                'background-color': '#4b9c64',
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
                'box-shadow': '0 0 0 3px rgba(0, 0, 0, 0.42)',
                'background-color': '#eee',
                'padding': '2px',
                'font-size': '14px',
                'font-family': 'Arial',
                'left': '0',
                'top': '0',
                'display': 'none',
                'width': '200px'
            },
            '#contextmenu-container::before': {
                'content': "'Yönetin'",
                'background-color': 'gray',
                'color': 'white',
                'display': 'block',
                'padding': '4px 10px',
                'text-align': 'center'
            },
            '#contextmenu-content': {},
            '#contextmenu-content > div': {
                'border-bottom': '1px solid #ddd',
                'transition': 'all .2s linear'
            },
            '#contextmenu-content > div > label': {
                'display': 'inline-block',
                'padding': '7px 10px'
            },
            '#contextmenu-content > div::before': {
                'content': "''",
                'display': 'inline-block',
                'transition': 'all .2s linear',
                'height': '0',
                'width': '0',
                'position': 'relative',
                'border': '5px solid transparent',
                'border-left-color': '#444',
                'margin-right': '5px',
                'left': '10px'
            },

            '#contextmenu-content > div:hover': {
                'background-color': '#d5d5d5',
                'color': '#444'
            },
            '#contextmenu-content > div:hover::before': {
                'border-left-color': 'orange'
            },
            '#contextmenu-content > div:last-child': {
                'border': '0'
            },

            //....................................................................................



            // SKELETON MENU PENCERESİ
            '#skeleton-menu': {
                'position': 'fixed',
                'left': '40px',
                'top': '40px',
                'width': '300px',
                'overflow': 'hidden',
                'background-color': 'rgb(48, 57, 90)',
                'border': '3px solid rgb(255, 255, 255)',
                'box-shadow': 'rgba(0, 0, 0, 0.27) 0px 0px 0px 8px',
                'z-index': '1000',
                'font-family': 'arial',
                'font-size': '14px',
                'color': '#333',
                'border-radius': '7px',
                'transition': 'width .3s cubic-bezier(0.1,0.1,0.1,1.0)'
            },
            '#skeleton-menu.showhide #skeleton-menu-content': {
                'display': 'none'
            },
            '#skeleton-menu.showhide': {
                'width': '100px'
            },
            '#skeleton-menu-content': {
                'padding': '10px 20px 10px 10px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'border-top': '1px solid #ddd',
                'border-bottom': '1px solid #ddd',
                'height': '250px',
                'background-color': 'white',
                'display': 'block'
            },
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
            'ul.selected.skeleton-menu-item': {
                'background-color': '#e6e2ce',
                'color': '#583f3f'
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
                'padding-left': '10px',
                'position': 'relative'
            },
            '.skeleton-menu-item li:last-child::after': {
                'content': "''",
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACc1BMVEUAAACdyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXcAAAAGRo0/AAAAz3RSTlMAAiFIX2x5hpKfrLnG09/s+RA3XoX30quEXTYPBDpzm8Lp6MGacjgydLbz8rUxKq7u7a0ZZafnpgpauPwBQSfhE2vJIyulNK/+PsNCzRgDbfHOEplh6y3ENd5x+hGxOXX7CMDQJFT4af168N1ZJXvvUrC0XAZOuxt86g6k2IAds1XlFigmFIP2nS7Lf0V2t9fjjCkNavW8flA8CT1wQCx3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')",
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'width': '25px',
                'height': '25px',
                'position': 'absolute',
                'opacity': '0.3',
                'right': '10px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0'
            },
            '.skeleton-menu-item.show li:last-child::after': {
                'opacity': '1'
            },
            '.skeleton-menu-item input[type=checkbox]': {

            },
            '.skeleton-menu-item .menu-item-img': {
                'box-shadow': 'inset 0px -28px 0px rgba(171, 171, 171, 0.12), 0px 0px 0px 3px #606ca9',
                'background': '#fff',
                'border-radius': '5px',
                'transition': 'all .3s linear',
                'cursor': 'pointer',
            },
            '.skeleton-menu-item .menu-item-img:hover': {
                'box-shadow': '1px 1px 3px #000'
            },
            '.skeleton-menu-item .menu-item-text': {
                'cursor': 'pointer'
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
            '#skeleton-menu-header': {
                'position': 'relative',
                'padding': '10px',
                'background-color': 'rgb(48, 57, 90)',
                'color': 'white',
                'border': '0',
                'border-bottom-width': '1px',
                'border-style': 'solid',
                'border-color': '#444',
                'animation': 'upload-colors 50s linear infinite'
            },
            '#skeleton-menu-footer': {
                'padding': '10px',
                'border': '0',
                'border-top-width': '1px',
                'border-style': 'solid',
                'border-color': 'rgba(255,255,255,.5)',
                'animation': 'upload-colors 50s linear infinite',
                'cursor': 'pointer'
            },
            '#skeleton-menu-footer a': {
                'display': 'block',
                'padding': '4px',
                'text-decoration': 'none',
                'color': '#fff',
                'font-size': '12px'
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
                'font-size': '13px',
                'font-family': 'Arial',
                'display': 'none',
                'padding': '10px',
                'pointer-events': 'none',
                'z-index': '9999',
                'opacity': '.9'
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
            '#skeleton-popup-content': {
                'position': 'fixed',
                'background-color': 'white',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%,-50%)',
                'border': '2px solid #fff',
                'padding': '0',
                'box-shadow': '0px 0px 0px 8px rgba(0, 0, 0, 0.35)',
                'min-width': '500px'
            },
            '#skeleton-popup-container': {

                'background-color': 'rgba(0,0,0,.4)',
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'top': '0',
                'bottom': '0',
                'display': 'none',
                'z-index': '9999'
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
                'background-color': '#b9b9b9',
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
                'max-height': '330px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'border': '1px solid #ddd',
                'border-right-color': '#cccccc',
                'border-bottom-color': '#ccc',
                'padding': '5px'
            },

            '#modalpage input[type=text],#modalpage input[type=number]': {
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
                'background': 'rgb(48, 57, 90)',
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
            '#modalpage .group-label-list label.selected': {},
            '#modalpage .grp-row': {
                'overflow': 'hidden'
            },
            '#modalpage .grp-row::before,#modalpage .grp-row::after': {
                'content': "''",
                'display': 'block'
            },
            '#modalpage .grp-col': {
                'list-style-type': 'none',
                'margin': '4px 0',
                'padding': '0'
            },
            '#modalpage .grp-col li': {
                'display': 'inline-block',
                'margin-right': '-4px',
                'width': '33%'
            },
            'hr': {
                'width': '100%',
                'margin': '10px 0'
            },
            '.nonedisplay': {
                'display': 'block',
                'width': '100%',
            },
            '.locked': {
                'pointer-events': 'none',
                'opacity': '0.4'
            },
            'hr': {
                'position': 'relative',
                'border': '0',
                'height': '2px',
                'background-color': '#ddd'
            },
            'hr.downarrow': {},
            'hr.downarrow::before': {
                'content': "''",
                'border': '12px solid transparent',
                'border-top-color': '#1bc368',
                'width': '0',
                'height': '0',
                'position': 'absolute',
                'left': '38px',
            },

            // UPLOAD
            '#skeleton-upload-files': {
                'position': 'fixed',
                'right': '40px',
                'bottom': '40px',
                'width': '250px',
                'height': '300px',
                'box-shadow': '0 0 0 6px rgba(0, 0, 0, 0.35)',
                'background': "#fff url('data:image/png;base64,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') no-repeat center center",
                'border': '3px solid #fff',
                'border-radius': '4px',
                'font-family': 'arial',
                'font-style': 'italic',
                'overflow': 'hidden'
            },
            '#skeleton-upload-files-header': {
                'padding': '10px',
                'color': 'white',
                'font-size': '20px',
                'background-color': '#775f8c',
                'border-bottom': '1px solid #58436b',
                'border-radius': '4px 4px 0 0',
                'animation': 'upload-colors 50s linear infinite',
                'position': 'relative'
            },
            '#upload-files-header-close': {
                'width': '24px',
                'height': '24px',
                'border-radius': '50%',
                'position': 'absolute',
                'right': '10px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0',
                'transition': 'all .2s linear'
            },
            '#upload-files-header-close:hover': {
                'background-color': 'rgba(0,0,0,0.4)',
            },
            '#upload-files-header-close::before,#upload-files-header-close::after': {
                'content': "''",
                'border-right': '2px solid #fff',
                'border-bottom': '2px solid #fff',
                'width': '8px',
                'height': '8px',
                'position': 'absolute',
                'float': 'left',
                'top': '0',
                'bottom': '0',
                'margin': 'auto'
            },
            '#upload-files-header-close::before': {
                'transform': 'rotate(-45deg)',
                'margin-left': '1px'
            },
            '#upload-files-header-close::after': {
                'transform': 'rotate(135deg)',
                'margin-left': '13px'
            },
            '#skeleton-upload-files-content': {
                'height': '211px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'background-color': 'white',
                'background-image': "url('data: image / png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABjCAMAAABaOVXeAAAAUVBMVEUnJycAAAAAAAAAAAB + fn4nJyeFhYX ///+JiYl5eXmDg4P///98fHyEhIRDQ0NDQ0OJiYmJiYmKiop5eXn///+Dg4OEhISBgYGBgYFfX19fX1+fciHbAAAAG3RSTlMJAwYAJwA2AkUhMAEkMwwAQgBIAAAAAC0AEgDgGVynAAAEIElEQVR4Ae1Zi27bMBAjL02d59Z07/3/hw6wYkLcFfZ5LYKsG5FEVqOKoXiSrRPAaECMVwSiYSw3D9gu4FHtR3B8BRlXDDu0L6hGiDCS/SLJgeoPgSC7TigStFoDxIUAWFGC1h0RPVQ77sBGoI47MIDtaZHkrB7HAk7VlDB49YNGsMoT6x7XD0pJR8k2WJQOVjyR8aaB7RPNE5pJ0DvIYLCkRMoZCIOUwNm9XYHkwAgHQag/Ge9agC6EK8ZT7YE2DpQmYBiVsFWCmjLslHz4uIBDa8/xM9vSlLSqCFQLsKYkG2+cTUmKbC0QZRL4P4vTQxjpx7Bs/NQYUGRS3YnE549ABLb7AgkbDdgvtB7C00sl5RCwrc6T5HfjayTwAWKsXoXP7riEmJLsh1AzHpGRPBHguqskcjRFGIOmBFodTW9VCbu4FwuoZUVoRrmyzWlxxj+6Hw1oPMn4ZEvVeAQCEwcly4xnCimV1cmo5mKAapiM5zQVQd0U68bL1R6w2y98SIWykrN1m5hMyagTAUJhWFNymPMUiEbCyCiRSAmDjAwGbDKqRF9HKbpMAnsRii4EmJcdMFYocVeBgD/ciRrMd5bycxfs1zkGe+7KjpRm/NlHS0BQSgLpOYAqWIsuuN8phHcZT9315bQr4tlqBgxHxzC9h1bdfzomDPpQ1Ut91zrC5wUU1q4v8zjucFnAQ2wW8LeQnBZJzl/nMRRJ7n+43kTJt+/zWCY5vt6Tmxj/ek8Kw7VMctzfgOSyfGd8A5KHW3hyg+GqKPm/Ct96gdzfRMl78aQw4/+d6BruP7qKa9e9DNfp3Q3X/d9P5rcxT5f9bjXSdgq+lcnXvgkafqsMg3Y9eR+l4pr6BLRnhO0eq1ts+q4WQVWGHVJuEsF1u9+Duk5gTtkGg9Ml6mn0R+SNsyASB9Qe9WRBJsn5Lj/CQae8vo/3hDzBrEQ0huJJEF0K0fdGyxIh0bGmhOFAn/vTEaAxUCRlJchplWS8ki0ZXHd+4mQQiVgTWDf+RYAaLr6sg2vSgz5NdAkENVzUOVMAcK11JclWuCcIeFZVS1ntWNY5qDLNE+TsXnm4JJ/ZdyhX731DzYvHTXJQBbt06vFZufrOf6osLZDn7uxYgCc6MTnhDfFnuXqG3yvox03Iv6OsRKC5Lk/sL4Jc3JQ88bFCI8uHNExLXHuVTx18OJjWLn2j/leGsAGR5wlgzG4OSiS2quRObLiQXVm3QCIygprxoMzzw+E6iQHXuQbMPUhwarvZ1x6JXAZ1CphIMmFdCUCPMYpQJAEG7MbC+tHG1J4uht3DHTHZziypFl0IAyBBPlyySVz1EEbMAO4JQNGLbVPIpgbS2iXAlRjQ3tUDZspqn4/T/WThUKd+EjRzngTf3GT8+Jm2PdrlqKI9T9oIjQ1+ASmrFBua6fE2AAAAAElFTkSuQmCC')",
                'animation': 'background-inf 5s linear infinite',
                'display': 'none'
            },
            '@keyframes background-inf': {
                'from': '{background-position:0 0;}',
                'to': '{background-position:-100px -100px;}'
            },
            '#skeleton-upload-files-footer': {
                'border-top': '1px solid #fff',
                'padding': '4px',
                'background-color': '#775f8c',
                'box-shadow': '0 -10px 12px -13px #000',
                'border-radius': '6px',
                'animation': 'upload-colors 50s linear infinite',
                'position': 'absolute',
                'bottom': '0',
                'left': '0',
                'right': '0'
            },
            '#skeleton-upload-files-footer input[type=file]': {
                'position': 'absolute',
                'width': '100%',
                'background': '#333',
                'padding': '10px 0px',
                'height': '17px',
                'opacity': '0'
            },
            '#skeleton-upload-button': {
                'width': '100%',
                '-webkit-appearance': 'button',
                'padding': '10px',
                'border-radius': '4px',
                'border': '1px solid #ddd',
                'background': 'white',
                'box-shadow': '1px 1px 2px #ccc, inset 0 -18px 0px 0px rgba(0, 0, 0, 0.08)',
                'font-weight': 'bold'
            },
            '@keyframes upload-colors': {
                '0%': "{background-color:#775f8c;}",
                '20%': "{background-color:#4f6d8e;}",
                '40%': "{background-color:#4f8e8c;}",
                '60%': "{background-color:#4f8e69;}",
                '70%': "{background-color:#8e8a4f;}",
                '80%': "{background-color:#8e4f4f;}",
                '100%': "{background-color:#775f8c;}",
            },
            '#skeleton-upload-loader': {
                'position': 'relative',
                'margin': '40px auto',
                'width': '86px'
            },
            '#skeleton-upload-loader > div': {
                'position': 'relative',
                'margin': 'auto',
                'width': '70px',
                'height': '70px',
                'border-radius': '50%',
                'box-shadow': '0px 0 5px #888',
            },
            '#skeleton-upload-loader > div.progress': {
                'background-color': 'transparent',
                'animation': 'upload-loader 1s linear infinite',
                'box-shadow': '3px 0 5px #888',
            },
            '#skeleton-upload-loader > div.error': {
                'background-color': 'red',
            },
            '#skeleton-upload-loader > div.success::before,#skeleton-upload-loader > div.success::after': {
                'content': "''",
                'width': '6px',
                'height': '36px',
                'background-color': 'white',
                'position': 'absolute'
            },
            '#skeleton-upload-loader > div.success': {
                'background-color': '#29a054'
            },
            '#skeleton-upload-loader > div.success::before': {
                'transform': 'rotate(-67deg)',
                'height': '21px',
                'top': '37px',
                'left': '25px'
            },
            '#skeleton-upload-loader > div.success::after': {
                'transform': 'rotate(24deg)',
                'left': '39px',
                'top': '18px'
            },
            '#skeleton-upload-loader > div.error::before': {
                'content': "''",
                'position': 'absolute',
                'width': '6px',
                'height': '46px',
                'background-color': 'white',
                'left': '32px',
                'top': '14px',
                'transform': 'rotate(90deg)'
            },
            '#skeleton-upload-loader > div.timeout': {
                'background-color': 'white',
                'border': '1px dashed #222'
            },
            '#skeleton-upload-loader > div.timeout::before': {
                'content': "''",
                'position': 'absolute',
                'width': '23px',
                'height': '13px',
                'background': '#757575',
                'left': '0',
                'top': '-17px',
                'right': '0',
                'margin': 'auto',
                'border-radius': '4px'
            },
            '#skeleton-upload-loader > div.timeout::after': {
                'content': "''",
                'position': 'absolute',
                'width': '16px',
                'height': '8px',
                'background': '#757575',
                'left': '60px',
                'top': '3px',
                'right': '0',
                'margin': 'auto',
                'border-radius': '4px',
                'transform': 'rotate(47deg)'
            },
            '@keyframes upload-loader': {
                'from': '{transform:rotate(0deg)}',
                'to': '{transform:rotate(360deg)}'
            },
            '#skeleton-upload-loader > label': {
                'font-size': '13px',
                'font-weight': 'bold',
                'margin': '19px 0',
                'display': 'block',
                'color': 'gray',
                'text-align': 'center'
            },
            '#skeleton-gallery-comment': {
                'margin-top': '95px',
                'text-align': 'center',
                'font-weight': 'bold'
            },
            '#skeleton-gallery-contentlist': {
                'height': '208px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'animation-duration': '.4s',
                'margin': '1px 0',
                'border': '1px solid #e2e2e2',
                'border-radius': '4px',
                'font-size': '13px'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name': {
                'padding': '10px 10px 10px 35px',
                'border-bottom': '1px solid #ececec',
                'transition': 'all .3s linear',
                'background': "#fff url('data:image/png;base64,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') no-repeat 5px center",
                'background-size': '20px 20px'

            },
            '#skeleton-gallery-contentlist > div.gall-item-name span': {
                'display': 'block',
            },
            '#skeleton-gallery-contentlist > div.gall-item-name span:first-child': {
                'font-weight': 'bold',
                'white-space': 'nowrap',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'color': '#636363'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name span:nth-child(2)': {
                'font-size': '13px',
                'color': '#6592bb'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name span:last-child': {
                'width': '25px',
                'height': '25px',
                'float': 'right',
                'margin-top': '-30px',
                'background': "#fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABr0lEQVRIidXVPWgVQRQF4O+Fh1iFYCESLGwCiiCiIKIgkkIESWVjZyViIIKgjdWxsNRGLURLWwshlioIioWFijxEiYiFpUUQi0cIFjsb1+f74ZHgz4HL7N659567Z2Z2WkYgyT5cw160i3sFb3EJL5IMzJ8YUXwHHuAIulgu1sWhMrdzWI2hBDiF7biH3Zgptgt3sRWnhxVoN1+KHFMN1+EyLmFPT+6HMh5IMtvwL+NlLdsaQZHjGTb3aeTKkCZni9XoYr9qjSqJkkzi3IDi42ITziTZskagkuXiBhSvcR7b+CnRVyyoFnIeT3F/zKIncEy1+K/xBVrNiCRH8QQ3kyyMUz3JVVzGXJLF2t8enEKSeZxUHah3uK1ojGncwsMk1wfV6CVYLVZjRrVDpkrsQdVGaGOyzH0ssX3P1KiDtm78NYL1EDcl/r8k+rcWecOI/7hEqwP84+CXXTToV1ET3MEjvMF3nC1z3/Aec/g8rKl+vwqYTtJO0kGnMf+48dzFIiSZUF2tI7+gUzo7jqUkK42E1Z7YicZYE3zCq2ZQSw/KvXzD73fwKHRwIcnzpvMHuyBkvFAnyocAAAAASUVORK5CYII=') no-repeat center center",
                'margin-right': '-5px',
                'transition': 'all .2s linear',
                'border-radius': '50%',
                'opacity': '0',
                'background-size': '17px 17px'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name:hover': {
                'background-color': '#e5e5e5',
                'padding-left': '15px',
                'cursor': 'pointer'
            },
            '#skeleton-gallery-contentlist > div.gall-item-name:hover span:last-child': {
                'margin-right': '10px',
                'opacity': '1'
            },

            // PROMPTER
            '#skeleton-prompter-container': {
                'background': "url('data:image/png;base64,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') no-repeat left bottom",
                'padding': '40px 40px 50px 74px',
                'position': 'fixed',
                'bottom': '27px',
                'left': '10px',
                'max-width': '470px',
                'animation': 'prompter-container .3s forwards',
                'z-index': '1101',
            },
            '@keyframes prompter-container': {
                'from': '{background-position:-200px bottom}',
                'to': '{background-position:0 bottom}'
            },
            '#skeleton-prompter-container.prev': {
                'animation': 'prompter-container-prev .3s forwards',
                'animation-delay': '.5s'
            },
            '@keyframes prompter-container-prev': {
                'from': '{background-position:0 bottom}',
                'to': '{background-position:-200px bottom}'
            },

            '#skeleton-prompter-content': {
                'font-size': '14px',
                'font-style': 'italic',
                'padding': '26px',
                'background': '#fde8a1',
                'border-radius': '34px 3px',
                'color': '#bd8b53',
                'font-family': 'arial',
                'position': 'relative',
                'box-shadow': '10px 10px 29px -5px #444, inset -40px -13px 54px -42px rgb(255, 189, 88)',
                'border-top': '1px solid #fff',
                'transform': 'scale(0)',
                'animation': 'prompter .8s forwards',
                'animation-delay': '.3s',

            },
            '@keyframes prompter': {
                '0%': '{transform:scale(0) rotate(-40deg) translate3d(-100px,-150px,-100px); opacity:0;}',
                '50%': '{transform:scale(1.1) rotate(-4deg) translate3d(0,0,10px); opacity:1;}',
                '100%': '{transform:scale(1) rotate(0deg) translate3d(0,0,0); opacity:1;}'
            },
            '#skeleton-prompter-content.prev': {
                'animation-delay': '0s',
                'animation': 'prompter-prev .4s forwards',
            },

            '@keyframes prompter-prev': {
                '0%': '{transform:scale(1) rotate(0deg) translate3d(0,0,0);opacity:1}',
                '50%': '{transform:scale(1.1) rotate(-4deg) translate3d(0,0,10px);opacity:1;}',
                '100%': '{transform:scale(0) rotate(-40deg) translate3d(-500px,-150px,-100px); opacity:0;}'
            },
            '#skeleton-prompter-content::after': {
                'content': "''",
                'position': 'absolute',
                'border': '37px solid transparent',
                'border-right-color': '#fde8a1',
                'left': '-34px',
                'transform': 'rotate(76deg)',
                'bottom': '0'
            },
            '#skeleton-prompter-close': {
                'position': 'absolute',
                'right': '0',
                'top': '0',
                'width': '20px',
                'height': '20px',
                'border-radius': '0 0 0 30px',
                'background': '#e6d69d url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8cGF0aCBkPSJNMTQuMSwxMS4zYy0wLjItMC4yLTAuMi0wLjUsMC0wLjdsNy41LTcuNWMwLjItMC4yLDAuMy0wLjUsMC4zLTAuN3MtMC4xLTAuNS0wLjMtMC43bC0xLjQtMS40QzIwLDAuMSwxOS43LDAsMTkuNSwwICBjLTAuMywwLTAuNSwwLjEtMC43LDAuM2wtNy41LDcuNWMtMC4yLDAuMi0wLjUsMC4yLTAuNywwTDMuMSwwLjNDMi45LDAuMSwyLjYsMCwyLjQsMFMxLjksMC4xLDEuNywwLjNMMC4zLDEuN0MwLjEsMS45LDAsMi4yLDAsMi40ICBzMC4xLDAuNSwwLjMsMC43bDcuNSw3LjVjMC4yLDAuMiwwLjIsMC41LDAsMC43bC03LjUsNy41QzAuMSwxOSwwLDE5LjMsMCwxOS41czAuMSwwLjUsMC4zLDAuN2wxLjQsMS40YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zICBzMC41LTAuMSwwLjctMC4zbDcuNS03LjVjMC4yLTAuMiwwLjUtMC4yLDAuNywwbDcuNSw3LjVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNzMC41LTAuMSwwLjctMC4zbDEuNC0xLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjcgIHMtMC4xLTAuNS0wLjMtMC43TDE0LjEsMTEuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==) no-repeat',
                'background-position': '64% 5px',
                'color': 'white',
                'padding': '3px 3px 10px 13px',
                'background-size': '50%',
                'box-shadow': 'inset 4px -3px 6px -5px #6d6d6d'
            },
            '#skeleton-prompter-close:hover': {
                'background-color': '#bd8b53'
            },
            '#skeleton-prompter-title': {
                'font-size': '17px',
                'margin-bottom': '10px',
                'font-weight': 'bold'
            },
            '.information-woman': {
                'width': '24px',
                'height': '24px',
                'position': 'absolute',
                'right': '5px',
                'top': '0',
                'bottom': '0',
                'margin': 'auto 0',
                'background-image': 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjMwLjcyNCwxODEuMjA4Yy0yLjM5MywyLjU4Ny0zLjk1LDQuMjU2LTUuMTE5LDUuNTA4QzIyNy43NzUsMTg0LjM3OSwyMzAuNzI0LDE4MS4yMDgsMjMwLjcyNCwxODEuMjA4eiIgZmlsbD0iI0ZGREE0NCIvPgoJCTxwYXRoIGQ9Ik0zMzYuOTYyLDIwMC44NzVjNy45NTYsOS43OTIsMTEuOTA2LDIxLjMzNywxMS45MDYsMzQuNjM0YzAsOS41MTQtMi43MjcsMTguNjY2LTguMTUxLDI3LjUxMiAgICBjLTIuOTc3LDUuMDA3LTYuODk4LDkuODQ4LTExLjc5NSwxNC40NjVsLTE2LjMwMSwxNi4xMDdjLTE1LjYzNCwxNS4zNTYtMjUuNzMyLDI4Ljk1OC0zMC4zNSw0MC44NjUgICAgYy00LjYxOCwxMS44NzgtNi45MjcsMjcuNTQtNi45MjcsNDYuOTU3aDM2LjI3NWMwLTE3LjEwOCwxLjk0Ny0zMC4wNDQsNS44MTQtMzguODA3YzMuODY2LTguNzYzLDEyLjMyMy0xOS40NDQsMjUuMzctMzIuMTAyICAgIGMxNy45NDItMTcuMzg3LDI5Ljg0OS0zMC41NzIsMzUuNzQ2LTM5LjUzczguODc0LTIwLjY0MSw4Ljg3NC0zNS4wNTFjMC0yMy43NTYtOC4wMzktNDMuMjg1LTI0LjE0Ni01OC41ODUgICAgYy0xNi4xMDYtMTUuMy0zNy41MjYtMjIuOTIyLTY0LjI4OC0yMi45MjJjLTI4LjkzMSwwLTUxLjY4Niw4LjkyOS02OC4yNjYsMjYuNzg5cy0yNC44Nyw0MS40NDktMjQuODcsNzAuNzk3aDM2LjI3NSAgICBjMC42NjctMTcuNjY1LDMuNDc4LTMxLjE4NCw4LjM0Ni00MC41NTljOC42NzktMTYuODMsMjQuMzY5LTI1LjI1OSw0Ny4wNjgtMjUuMjU5ICAgIEMzMTUuODc1LDE4Ni4xODcsMzI5LjAzMywxOTEuMDgzLDMzNi45NjIsMjAwLjg3NXoiIGZpbGw9IiNGRkRBNDQiLz4KCQk8cGF0aCBkPSJNNjEyLDMwNkM2MTIsMTM3LjAwNCw0NzQuOTk1LDAsMzA2LDBDMTM3LjAwNCwwLDAsMTM3LjAwNCwwLDMwNmMwLDE2OC45OTUsMTM3LjAwNCwzMDYsMzA2LDMwNiAgICBDNDc0Ljk5NSw2MTIsNjEyLDQ3NC45OTUsNjEyLDMwNnogTTI3LjgxOCwzMDZDMjcuODE4LDE1Mi4zNiwxNTIuMzYsMjcuODE4LDMwNiwyNy44MThTNTg0LjE4MiwxNTIuMzYsNTg0LjE4MiwzMDYgICAgUzQ1OS42NCw1ODQuMTgyLDMwNiw1ODQuMTgyUzI3LjgxOCw0NTkuNjQsMjcuODE4LDMwNnoiIGZpbGw9IiNGRkRBNDQiLz4KCQk8cmVjdCB4PSIyNzQuNTEiIHk9IjQxNS4yMTQiIHdpZHRoPSI0MC41NTkiIGhlaWdodD0iNDIuMzY3IiBmaWxsPSIjRkZEQTQ0Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)',
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
                'background-size': '100%',
                'border-radius': '50%'
            },
            '.information-woman:hover': {
                'background-color': '#222'
            },
            'i.ichk': {
                'display': 'inline-block',
                'background-size': 'cover',
                'vertical-align': 'middle'
            },
            'i.ichk::after': {
                'content': "''",
                'display': 'block',
                'padding': '7px',
                'background-size': 'cover'
            },
            'i.ichk_x182': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYXBjsAa31riwAAALRJREFUKM+1jzGLhDAYRN8XrjOiplMEwdJ/4P8vbKzFShDElAqJ2ATcYrlO97a5qd/MY8R7fw3DwDRNbNvGXbIso65rmqZB+r6/juOgLEvSNL0t7PvOsixEUcSPtZa2bTHGICKPhiRJ6LoOFUL4CAOICMYYQggopRTfRimF+rR8Z/p+/tfy/wWtNc65P0HnHFprZBzHCyDPc+I4foStte/j53le8zyzrive+9uC1pqiKKiqihfDLkJ0kVzlOQAAAABJRU5ErkJggg==')",

            },
            'i.ichk_x183': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYXBxQH5sescgAAAUxJREFUKM9tkrFOwmAUhb//p8VCQCAawaXRhM1BmDTGhcFNHoCBGB9BVx9AN1/AMApv4Eji4uAgiSYmhkVMJOCAJSZt2r+tQ6GG4B1vvntycs4Vw2kYtnvQ7cPAAsHihICZg1oZGhXQ2j24fQJDg5yxfOAHMLEjBkB2+xGckMswARyaAbqImG4f5MACKVkapaBZ9bg8luyWPCCyLAXLykEA5qrLyZ7G84fN/ZsTO4i1Ax+2cz6+Al8pLo4kAjjrjElnsrGYNlc8MH2u6glaDx6WHbCzucL13YhvUSSTYPFASui+/vBSTXK6n8L1Q/ojh9ajoLBuLNiV4SxrPZ2jeTNiPPVIJgTnnS/yaxtxIHNO1FthOLGjWF03QFnvFDOCT1Ukm00t9FFIgayVwVHRQk9K9PwWQ78Uw+EMdlTUttaoRAp/ryFAM7Cc/1/jF76IfO/GTNe2AAAAAElFTkSuQmCC')"
            },
            'i.ichk_x184': {
                'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAACcFBMVEWdyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXedyXcAAADnalsEAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhcHGQYkbuKpAAAAX0lEQVQoz52SAQoAIQgE9wf3yr7rm46SzvVaKVoi3EYUUmDKhvCTkap3JmaahM+EXRUn94W9lALcI+KnZ4yDNgtEMwdg4I7vBFL1CwANsAHrDLAS8XH1QHYjPFkGsT4vJpoj0M6qwRkAAAAASUVORK5CYII=')"
            },
            '#skeleton-gallery-fullscreen-container': {
                'position': 'fixed',
                'background-color': 'rgba(0, 0, 0, 0.65)',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'top': '0',
                'z-index': '1010',
                'overflow':'hidden'
            },
            '#skeleton-gallery-fullscreen-images': {
                'position':'fixed',
                'left':'0',
                'right':'0',
                'bottom':'0',
                'overflow':'hidden',
                'border-top':'1px solid #868686',
                'height':'100px',
                'z-index':'1011',
                'background-color':'rgba(56, 56, 56, 0.62)'
            },
            '#skeleton-gallery-fullscreen-content': {
                'position':'relative',
            },
            '#skeleton-gallery-fullscreen-content img': {
                'pointer-events':'none',
                'display':'block'
            }
        });

        style.insert(parent.document.body);

    }); // MODULE


})(Skeleton);