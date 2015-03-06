seajs.config({
    preload: [
        window.jQuery ? '' : 'jquery',
        window.angular ? '' : 'angular'
    ]
});
