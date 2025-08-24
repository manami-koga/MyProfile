import { DeliverableList } from "./DeliverableList";
import profileStyles from "../../styles/profile.module.css"
import { useChangeSite } from "@/hooks/useChangeSite";

const ProductList = () => {
    const { onClickSite } = useChangeSite();
    return (
        <>
            {
                DeliverableList?.map((Item) => {
                    return (
                        <div className={profileStyles.card} key={Item.id}>
                            <p>成果物名：{Item.DeliverableList}</p>
                            <p>作成日：{Item.CreationDate}</p>
                            <p>ステータス：{Item.Status}</p>
                            <button  className="btn btn-secondary" onClick={() => onClickSite(Item.information)}>詳細</button>{/**名前を考える */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductList;