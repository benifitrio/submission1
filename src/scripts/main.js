import {renderNav} from './routes/router';
import {default as styleJs}  from './view/style';
import {default as Ratings}  from './view/rating';

export default function main(){
    renderNav();
    setTimeout(styleJs, 3000);
    Ratings();
}