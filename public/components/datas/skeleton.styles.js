(function(_) {

    _.MODULE(function() {


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
                'display': 'inline-block',
                'transition': 'all .2s linear',
                'height': '0',
                'width': '0',
                'position': 'relative',
                'border': '5px solid transparent',
                'border-left-color': 'white',
                'margin-right': '5px',
                'opacity': '0',
                'display': 'none',
                'left': '0'
            },

            '#contextmenu-content > div:hover': {
                'background-color': 'rgb(48, 57, 90)',
                'color': 'white'
            },
            '#contextmenu-content > div:hover::before': {
                'left': '10px',
                'opacity': '1',
                'display': 'inline-block'
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
                'border-radius': '7px'
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
            '#skeleton-menu-header': {
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
                'background': "#fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAApFSURBVHja7Zx7dBfFFcc/+REgBxCCBDSgcAOCVRD0KAoqBRHkFcF6qFBFodUjbQGfrYBWLegBfKAirbS1aiNUT1UwIlrRiqAoYMEixYJQzPBIUGJQyvthfv0js5PN45fs7u+3uwT3mz9m7uzO7L3fzG9mdu6dhQgRIkSIECFChO8p0sJWoAwqxum0IJPmNGMPhRSxU45+DwhQHRhCV86hM40rXYpTTBHbWcJC+eIEJEA14xpu4FJHN3/GQhaySuInBAEqnSsYzVAyXFb8innMkK/rNAHqFO7iOk5JeEOcYhrRJOH1vczkMdlbRwlQo5jFyZUKj7KSArayFcVWtsthUE1oTTbZtKEX/aqMDsVMY44crmMEqDb8gdxKhWvI48WaO7XKoA+55NKuQvE2xsvrdYgAdSMzaWYrKGIez8tnLlrozhQG2QriTGVK8sNiAAQo4Wn62QrWMpl35DsPLV3KNHrZChYyKtnxwHcC1NXk2Qa1w0zlYTmWRHuDmMa5RtzIMNl0HBOgfsrT1DPicm6Sz5NuM51HuM2Ie7hG3j5OCVB38Kh5wl4m81SqljJqBM+Y2eEAl8nHxyEB6k4eNcIKRsq2lLbemQV00sJX9BAVOAGqIRfQhmyyacQevmY9n8g35upQXiWmhVX0T+XiRT+hKa/SVwsbuFi+DYwA1ZQrGcZATqp0Ic5q8pkn21Q3lpuhbzX9ZE+qzQdQJ/EB3bTwHgO8vD+6JkBlMIG7yazhlmO8RC9O19Ja+pb3i5RT0JoVtNVCnozxnQA1gofNA51gPZel+vWlkkZns5zmWsiVN3wkQNVjJrdWKvyGQgo5SBanIVWqbKS37PLTfADVi3/QAIDNdJEj7mqnO35MJi/R31awmgXkywbbHVn0ZjSDbfN+M07CdwLkAzWD+wDoyO085K62wx6gMnif7kZcx0R5K8GdOUxnhBG38sPUTn8JtPuM9gDso5PsdFM35vC+Z4z5pdzFeYnMBymQkQxjnxbb8a461W8C5BATdLaJ2x7gCGqSiuu/PWqwoxrnKGXquB6YPOm4QD+tVF3opp6DHqDOYKrOHmGwvOmkWfk3F7JZC4PVjwJg4FYOAJDG2BQTwHTq69zN8qHThmUXI7FG5FmqsdN6XiHbeUFnhysXu421EqB6MFxn/yJ5rlT6hMk6ezp3+k0A8KxOmzI0hQTwa50e5DeuVXqclTp3g//2ywqsV+1RKSNAZTBAZ5+UQtcqxfm9znZQ3d3W9oDndDpQZaWIANue7LO1NVUtXmG3zl0bAAHPU7bRVt+2EkmSAOvXtNHbxpMcYp7ODvHfftnJUp11NFk7IeAHOl3kWasVOm2ngtiBXl1J76QJyNbpfz2rZDk2G+D7ihD4VKfidCp0SkCRZ5UKTM7Na7RXrDN2dUwBAaqRGQK/9KqRFFOisyd7bcMFPsdymTn8EdTcA8rdGfVra6gGzAVgtxmgfIQc4z/uCEi4H6CyeILrjHgoCa3uo4CO/FEOpt5g1Z6uZJFFS5pxlEMcMk53hwQkGJlVLs/S0lZwnqxNvfpJmz+RBxL2zb3kMU9WeSJA3c6jth9HEQ/wTDARO67Mj7G7gsO1OmxmLrNr2jCvQoBKZzY/N+IhHmOa7A/b2GoJyOALM0vVhBKmMCeRP7IqAU/YNj4/ZqQUcNxCDeQhOrLf/B2gAS1pRSvbvmQZNnGLLHZAgPqJeauGPMamKg4jYGKacDmDGFRh5RHntzxQ1TdZgQDVhZVm5r9XHgzbkKSJyOV+LrAVvMb1lV10NgJUM/5p1k/Pyc/CVj9lJDzE2UZcTx8psV83Y71KI8+Y/6FtGKzjkEVcwJ+M2IXXVaNqCWAyw3RuG1e79a8cz5CDMpYRWF2/J39TtiFS/wRUNlv1kmI/l8in7h5RF6B6sth4s2fLLVa51QN+YVZUY05E80FWMARrPTNe9bHK0wBUQ7brhe9K6Rm2qv5B9ect/S/fQlc5AFYPuNas+x8OW0k/Ie/wmM52QE/yZT1grY6z2MRZUhq2mn5CNWQNnQE4Ro7sgBioPibM5JET23yQw4yhbDWYXuZQjYGJuftSb12c0JDVWN7Nm1VjiKkMs4U8q26u/F1jhk4zGQMxzjcT4PywNQsGspyPdPZqiHGRFopls9cm6xysN96LVcMYVjjBR15bq4OwYoszuDhm3pnXeW2t7kE2G29F3xgtdNbXaL7E+OJC9Z5aoW4K+LFLdXpWuiGgxGNTSWHrpfG/0wToUZCVMyPp5pxjh05bxWiqs/8L0XwgbXrBpAAfXVxOgNX1W3htKxXmB06BjQDL7dk6XPMDpsDyUjUKiYDqzA+UglY63RkKAYnMD5ACK1ahKIYV+tQ5FPON7y7NnPoJhAIbAWt0tpM6M3jzv7Ni0Ci9Pz4rQAqs4xyFMd41gc1XBW9+B9tRmpzbgqJANaC3zm6JyWEsn9kwrw2mwnxNwZOBUNDXrH7ejAGvaeEi5WsUT23mA+TcGggFV+l0vWyJAW9Q5jqOcX+45pdRwGx/KVANTF/PhxjIbvJ1wWjl01zg1HwAucVnCn5p5oB8a1v8Ht0H6jE9bPM1Bb/ziwKVaYK+18saTYBs4mldeKUa4K3h1JkPIBNMmHWqKbjbvPVMhnLX2BQzGb6oHIYY+mc+gIz3gwJ1PpZXcLksshEgX/GIvtCcRSozVeYXXOTNfE3BU+UUqBQcuVCnkE9DLUwsS8rd49NZpnOdeFk5Pk9YM9KmezUfQMaVU8DUgswkzW/AfE7TwivyUSUC5CjDzU5ZPxar5u6arw7xmPE5eTAfoN145uhsI+cR4NWa35A8LtHCBm60ym2hsvI1Q81I0JdVyb8bpJXq3/Eyb+ZDWrzduPgsSoFVOSu9tKDNP5WljNRCCbli9r8qR4kNY4Eh5VtGuT+MXBnbunzXpCbVlY7big/KSXgYU+WktW+7JM3z1ydUd16ljRaO0l+WlV+rGieYywu27wK8zST5V7Ik1KicAwKSar8l9zHWeL+OMEZetF+vEi0ui+hJ+dfbrmCN+mtqJ8bgoBqre9nCeGP+LvpWND9RrHALXuayCkXreI18+cQHJX3pASqTIVzFwAr7Tp8ytOpB7kTR4un8iklVQpEL2UgROymimOoiCUp4122EgXcC1LlV5oX6ZJNNa9raXL5lKCWPCdXFPNdwkEm14B7G6U8TOEUBXWWfmwpeCVAv8WPHNy9mYqLQrxpOjEiJ3MGZzHN1WCLH+Ym9ZKDOcGz+ai6XgYkj32o5NCVKrieL4czF6YdQgnGyf1mrJyvOKiZzlnSXJTXd5mDJK/uZz3yVTi+60Vr/tawSkA5Qwp/l/SDsl31qNJOqjAFH2EkRhRRRwFvOviQR+ldl/V4H1Aann9A4YRERELYCYSMiIGwFwkZEQNgKhI2IgLAVCBsRAWErEDYiAsJWIGxEBIStQNiICAhbgbARERC2AmEjIiBsBaxY5Xo7kmum7hLwOHFIe7vt+rAVCQ1bOhX0Tr6VCBEiRIgQIUKECC7xf086MiKZ6mm/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTE5VDE0OjIyOjQzKzAyOjAwxiWR8QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNi0xOVQxNDoyMjo0MyswMjowMLd4KU0AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC') no-repeat 5px center",
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
            }

        });

        style.insert(parent.document.body);

    }); // MODULE


})(Skeleton);