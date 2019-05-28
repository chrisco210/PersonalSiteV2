/**
 * Construct a TitleWriter instance
 * @param title {string} the string to write
 * @constructor
 */
function TitleWriter(title) {
    this.title = title;
    this.current = 0;
    this.done = false;
}

TitleWriter.prototype.getNextSegment = function() {
    if(this.done) {
        return '';
    }

    var number = Math.random() * 3;
    var nextSeg = number < 1 ? Math.ceil(number) : Math.floor(number);

    var lastCurrent;

    if(this.current + nextSeg > this.title.length) {
        this.done = true;
        lastCurrent = this.current;
        this.current = this.title.length;
        return this.title.substring(lastCurrent);
    } else {
        lastCurrent = this.current;
        this.current += nextSeg;

        return this.title.substring(lastCurrent, this.current);
    }
};






