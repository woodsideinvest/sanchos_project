// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    override: true,
    //modules: ['@nuxt/image', '@nuxt/image-edge'],
    modules: ['@nuxt/image'],
    css: ['~/assets/css/6623B3A69192691B9.css',
        '~/assets/css/get.css',
        '~/assets/css/style.min.css',
        '~/assets/css/image-map-pro.min.css',
        '~/assets/css/share-buttons.css',
        '~/assets/css/default.css',
        '~/assets/css/tablepress-responsive.min.css',
        '~/assets/css/main.css'],
    image: {
        inject: true,
        provider: 'ipx',
        dir: 'public/images',
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
    },
    app: {
        head: {
            title: 'Home',
            meta: [
                {name: 'description', content: 'home'}
            ],
            script: [
                {src: '/js/underscore.min.js', mode: 'client', body: true},
                {src: '/js/jquery.min.js', mode: 'client', body: true},
                {src: '/js/jquery-migrate.min.js', mode: 'client', body: true},
                {src: '/js/excanvas.compiled.js', mode: 'client', body: true},
                {src: '/js/spinners.min.js', mode: 'client', body: true},
                {src: '/js/wp-sentry-browser.min.js', mode: 'client', body: true},
                {src: '/js/image-map-pro.min.js', mode: 'client', body: true},
                {src: '/js/preloader.js', mode: 'client', body: true},
                {src: '/js/main.js', mode: 'client', body: true, async: true},

                {
                    innerHTML: `
                      window.addEventListener('load', function() {
            document.body.classList.add("loading");            
    setTimeout(function () {
        document.body.classList.remove("loading");
    }, 100);
    })
        `,
                    type: 'text/javascript',
                    defer: true
                },
                {
                    innerHTML: `
            if (document.documentMode === 10) {
        document.documentElement.className += 'ie10 ';
    }

    // var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // if(isIE){
    //   setTimeout(function() {
    //     var browserUpgradealertHeight = document.getElementsByClassName('browser-upgrade')[0].offsetHeight;
    //     var alertHeight = document.getElementsByClassName('alert-section')[0].offsetHeight;
    //     var topSpace = browserUpgradealertHeight;

    //     document.getElementsByTagName('html')[0].setAttribute('style', 'margin-top: ' + topSpace + 'px');
    //     document.getElementsByTagName('html')[0].setAttribute('style', 'margin-top: ' + topSpace + 'px');
    //   }, 2000);
    // }
        `,
                    type: 'text/javascript'
                },

            ],
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    routeRules: {},
})