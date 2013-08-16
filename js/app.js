requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/src',
});

// Start the main app logic.
requirejs(['app/sub'],
function   (sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});