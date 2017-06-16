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
                'background': '#fff',
                'border': '3px solid #fff',
                'border-radius': '4px',
                'font-family': 'arial'
            },
            '#skeleton-upload-files-header': {
                'padding': '10px',
                'text-align': 'center',
                'color': 'white',
                'font-size': '20px',
                'background-color': '#775f8c',
                'border-bottom': '1px solid #58436b',
                'border-radius': '4px 4px 0 0',
                'animation': 'upload-colors 50s linear infinite'
            },
            '#skeleton-upload-files-content': {
                'height': '211px',
                'overflow': 'hidden',
                'overflow-y': 'auto',
                'background-image': "url('data: image / png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABjCAMAAABaOVXeAAAAUVBMVEUnJycAAAAAAAAAAAB + fn4nJyeFhYX ///+JiYl5eXmDg4P///98fHyEhIRDQ0NDQ0OJiYmJiYmKiop5eXn///+Dg4OEhISBgYGBgYFfX19fX1+fciHbAAAAG3RSTlMJAwYAJwA2AkUhMAEkMwwAQgBIAAAAAC0AEgDgGVynAAAEIElEQVR4Ae1Zi27bMBAjL02d59Z07/3/hw6wYkLcFfZ5LYKsG5FEVqOKoXiSrRPAaECMVwSiYSw3D9gu4FHtR3B8BRlXDDu0L6hGiDCS/SLJgeoPgSC7TigStFoDxIUAWFGC1h0RPVQ77sBGoI47MIDtaZHkrB7HAk7VlDB49YNGsMoT6x7XD0pJR8k2WJQOVjyR8aaB7RPNE5pJ0DvIYLCkRMoZCIOUwNm9XYHkwAgHQag/Ge9agC6EK8ZT7YE2DpQmYBiVsFWCmjLslHz4uIBDa8/xM9vSlLSqCFQLsKYkG2+cTUmKbC0QZRL4P4vTQxjpx7Bs/NQYUGRS3YnE549ABLb7AgkbDdgvtB7C00sl5RCwrc6T5HfjayTwAWKsXoXP7riEmJLsh1AzHpGRPBHguqskcjRFGIOmBFodTW9VCbu4FwuoZUVoRrmyzWlxxj+6Hw1oPMn4ZEvVeAQCEwcly4xnCimV1cmo5mKAapiM5zQVQd0U68bL1R6w2y98SIWykrN1m5hMyagTAUJhWFNymPMUiEbCyCiRSAmDjAwGbDKqRF9HKbpMAnsRii4EmJcdMFYocVeBgD/ciRrMd5bycxfs1zkGe+7KjpRm/NlHS0BQSgLpOYAqWIsuuN8phHcZT9315bQr4tlqBgxHxzC9h1bdfzomDPpQ1Ut91zrC5wUU1q4v8zjucFnAQ2wW8LeQnBZJzl/nMRRJ7n+43kTJt+/zWCY5vt6Tmxj/ek8Kw7VMctzfgOSyfGd8A5KHW3hyg+GqKPm/Ct96gdzfRMl78aQw4/+d6BruP7qKa9e9DNfp3Q3X/d9P5rcxT5f9bjXSdgq+lcnXvgkafqsMg3Y9eR+l4pr6BLRnhO0eq1ts+q4WQVWGHVJuEsF1u9+Duk5gTtkGg9Ml6mn0R+SNsyASB9Qe9WRBJsn5Lj/CQae8vo/3hDzBrEQ0huJJEF0K0fdGyxIh0bGmhOFAn/vTEaAxUCRlJchplWS8ki0ZXHd+4mQQiVgTWDf+RYAaLr6sg2vSgz5NdAkENVzUOVMAcK11JclWuCcIeFZVS1ntWNY5qDLNE+TsXnm4JJ/ZdyhX731DzYvHTXJQBbt06vFZufrOf6osLZDn7uxYgCc6MTnhDfFnuXqG3yvox03Iv6OsRKC5Lk/sL4Jc3JQ88bFCI8uHNExLXHuVTx18OJjWLn2j/leGsAGR5wlgzG4OSiS2quRObLiQXVm3QCIygprxoMzzw+E6iQHXuQbMPUhwarvZ1x6JXAZ1CphIMmFdCUCPMYpQJAEG7MbC+tHG1J4uht3DHTHZziypFl0IAyBBPlyySVz1EEbMAO4JQNGLbVPIpgbS2iXAlRjQ3tUDZspqn4/T/WThUKd+EjRzngTf3GT8+Jm2PdrlqKI9T9oIjQ1+ASmrFBua6fE2AAAAAElFTkSuQmCC')",
                'animation': 'background-inf 5s linear infinite'
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
                'animation': 'upload-colors 50s linear infinite'
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
                'box-shadow': ' 1px 1px 2px #ccc',
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
                'width': '70px',
                'height': '70px',
                'background-color': 'transparent',
                'box-shadow': '-2px 0 5px #888',
                'animation': 'upload-loader 1s linear infinite',
            },
            '#skeleton-upload-loader > div.error': {
                'width': '70px',
                'height': '70px',
                'background-color': 'red',
                'box-shadow': '-2px 0 5px #888',
                'border-radius': '50%',
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
            }

        });

        style.insert(parent.document.body);

    }); // MODULE


})(Skeleton);