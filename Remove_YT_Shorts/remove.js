function killshorts() {
    if (document.getElementsByTagName("body")[0].getAttribute("style") === "") {
        var test = document.querySelectorAll("ytd-mini-guide-entry-renderer[aria-label='Shorts']");
        test.forEach(
            (icon) => icon.style.display = "none"
        );
    } else {
        var test = document.querySelectorAll("a[title='Shorts']");
        test.forEach(
            (icon) => icon.style.display = "none"
        );
    }
    var elementsToRemove = document.querySelectorAll("ytd-rich-section-renderer.ytd-rich-grid-renderer");
    elementsToRemove.forEach(
        (element) => element.style.display = "none"
    );
    var moreElementsToRemove = document.querySelectorAll("ytd-reel-shelf-renderer.ytd-item-section-renderer");
    moreElementsToRemove.forEach(
        (moreElement) => moreElement.style.display = "none"
    );
    console.log("Code is ran")
}

const observer = new MutationObserver(killshorts);

observer.observe(document, { childList: true, subtree: true });
console.log("running")