import BScroll from "better-scroll";
import axios from "utils/http";
import {
    Toast
} from 'mint-ui'

export const scroll = ({
    el,
    data,
    url,
    vm,
}) => {
    let page = 2;
    let bscroll = new BScroll(el, {
        probeType: 1,
        click:true,    
        pullUpLoad: {
            threshold: 50
        }
    })
    bscroll.on("pullingUp", async () => {
        if (page < 5) {
            let result = await axios({
                method: "get",
                url,
                params: {
                    card_id: 4057,
                    client_v: 1,
                    page,
                    platform: "wap",
                    type: "formal",
                    page_key: "",
                    tab:'coutuan_home',
                    per_page:20
                }
            });
            if(result.item_list){
                data.push(...result.item_list);
            }
            else if(result.data){
                data.push(...result.data)
            }
            vm.$nextTick(() => {
                bscroll.refresh();
                page++;
                bscroll.finishPullUp();
            })
        }
        if (page === 5) {
            Toast({
                message: '到底了~',
                position: 'bottom',
                duration: 1000
            })
            // 告诉better-scroll, 可以进行下次滑动了
            bscroll.finishPullUp()
        }

    });
}
