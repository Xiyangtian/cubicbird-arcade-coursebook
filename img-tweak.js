// 图片宽度微调：读取「preview.html」里保存的宽度设置，覆盖本页图片显示宽度
(function () {
    var saved = null;
    try {
        saved = JSON.parse(localStorage.getItem('arcade-img-widths') || 'null');
    } catch (e) {
        saved = null;
    }
    if (!saved) return;
    function apply() {
        document.querySelectorAll('.fig-img').forEach(function (img) {
            var key = img.getAttribute('src');
            if (saved[key] !== undefined) {
                img.style.setProperty('width', saved[key] + 'px', 'important');
            }
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
