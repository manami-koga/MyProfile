import styles from "../../styles/main.module.css"
import tableStyles from "../../styles/table.module.css"

import { useState } from "react";
import { QualificationsList } from "./QualificationsList";

const Qualifications = () => {

    const [qualifications, setQualifications] = useState(QualificationsList);
    //検索フォームの入力値保持
    const [inputValue, setInputvalue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInputvalue(newValue)
        search(newValue);
    }
    //検索欄が空の場合、検索を行わずに一覧を表示という処理
    const search = (keyword: string) => {
        if (keyword === "") {
            setQualifications(QualificationsList);
            return;
        }

        //絞り込み処理
        const searchQualifications = QualificationsList.filter((item) =>
            Object.values(item).some(
                (value) =>
                    typeof value === "string" &&
                    value !== undefined &&
                    value !== null &&
                    //実際の入力値と資格名を比較
                    value.toUpperCase().indexOf(keyword?.toUpperCase() ?? "") !== -1)
        );
        setQualifications(searchQualifications);
    };


    const handleDateFilterChange = (e) => {
        setQualifications(e.target.value)
    }

    return (
        <>
            <div className={styles.keywordSearch}>
                <label >キーワード検索：</label>
                <input type="text" value={inputValue} onChange={handleInputChange} className={styles.text} />
            </div>

            <div className={styles.search}>
                <label>絞り込み条件</label>
                <div className={styles.getDate}>
                    <label>取得日</label>
                    <input type="date"
                        onChange={handleDateFilterChange} className={styles.text} />
                </div>
                <div className={styles.getDate}>
                    <label>有効期限の有無</label>
                    <select name="deadline" required className={styles.text}>
                        <option value="">選択してください</option>
                        <option value="なし">なし</option>
                        <option value="あり">あり</option>
                    </select>
                </div>
            </div>

            <div className={tableStyles.table}>
                <table className={tableStyles.design08}>
                    <thead> {/**テーブルの見出し部分 */}
                        <tr>
                            <th>ID</th>
                            <th>資格名</th>
                            <th>取得日</th>
                            <th>有効期限</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifications.length === 0 ? (
                            <tr>
                                <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                                    該当する資格はありませんでした。
                                    {/**悲しい顔の写真 */}
                                </td>
                            </tr>

                        ) :
                            qualifications.map((Item) => (
                                <tr key={Item.id}>
                                    <td>{Item.id}</td>
                                    <td>{Item.name}</td>
                                    <td>{Item.date}</td>
                                    <td>{Item.expirationDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Qualifications;