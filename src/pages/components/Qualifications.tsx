import { useState } from "react";
import Image from "next/image";
import icon01 from "../../../public/Images/icon01.png";
import tableStyles from "../../styles/table.module.css";
import searchStyle from "../../styles/search.module.css";
import styles from "../../styles/main.module.css";
import buttonStyle from "../../styles/buttonStyles.module.css";
import { QualificationsList } from "./QualificationsList";
import { useChangeSite } from "@/hooks/useChangeSite";

//初期値：4行表示
const rowsPerPage = 4;

const Qualifications: React.FC = () => {
    //hooksの利用
    const { onClickSite } = useChangeSite();

    //資格情報の保持
    const [qualifications, setQualifications] = useState(QualificationsList);

    //検索フォームの入力値保持
    const [inputValue, setInputvalue] = useState<string>("");

    //有効期限の情報保持
    const [expiration, setExpiration] = useState<string>("");

    //現在のページ番号の保持
    const [currentPage, setCurrentPage] = useState<number>(1);

    //全体のページ数の計算 ceil:小数点以下を切り捨て
    const totalPages = Math.ceil(qualifications.length / rowsPerPage);

    //表示するデータの開始行数の計算
    const startIndex = (currentPage - 1) * rowsPerPage;

    //現在、表示するデータの行数の計算
    const currentRows = qualifications.slice(startIndex, startIndex + rowsPerPage);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputvalue(newValue);
        search(newValue);
    };

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
                    value.toUpperCase().indexOf(keyword?.toUpperCase() ?? "") !== -1
            )
        );
        setQualifications(searchQualifications);
    };

    const handleExpiration = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newExpiration = e.target.value; //選択内容の取得
        setExpiration(newExpiration); //選択内容をステートに保持（画面表示のため）
        searchExpiration(newExpiration); //取得した情報を絞り込み関数に引数として渡す
    };

    //絞り込み関数の本体
    const searchExpiration = (newExpiration: string) => {
        if (newExpiration === "") {
            setQualifications(QualificationsList);
            return;
        }

        const searchExpirationDate = QualificationsList.filter((item) => {
            const isNone = item.expirationDate === "なし"; //なしかどうかを判定
            return newExpiration === "あり" ? !isNone : isNone; //三項演算子（なしを返す：なし以外を返す）
        });
        return setQualifications(searchExpirationDate); //絞り込みの情報を保持→画面に表示
    };

    //ページネーションの戻るボタン処理
    const onClickBack = () => {
        //prev:現在のページ番号
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    //ページネーションの進むボタン処理
    const onClickNaxt = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    // const handleDateFilterChange = (e) => {
    //     setQualifications(e.target.value)
    // }

    return (
        <>
            <div className={searchStyle.searchContainer}>
                <div className={searchStyle.keywordSearch}>
                    <label>キーワード検索：</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className={searchStyle.textSearch}
                    />
                </div>

                <div className={searchStyle.search}>
                    <label>絞り込み条件</label>

                    {/* <div className={searchStyle.getDate}>
                        <label>取得日</label>
                        <input type="date"
                            onChange={handleDateFilterChange} className={searchStyle.text} />
                    </div> */}

                    <div className={searchStyle.getDate}>
                        <label>有効期限の有無</label>
                        <select
                            name="deadline"
                            required
                            className={searchStyle.text}
                            onChange={handleExpiration}
                        >
                            <option value="">選択してください</option>
                            <option value="なし">なし</option>
                            <option value="あり">あり</option>
                        </select>
                    </div>
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
                            <th>公式サイトへ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                                    該当する資格はありませんでした。
                                    {/**悲しい顔の写真 */}
                                </td>
                            </tr>
                        ) : (
                            currentRows.map((Item) => (
                                <tr key={Item.id}>
                                    <td>{Item.id}</td>
                                    <td>{Item.name}</td>
                                    <td>{Item.date}</td>
                                    <td>{Item.expirationDate}</td>
                                    <td>
                                        {Item.site ? (
                                            <button
                                                onClick={() => onClickSite(Item.site)}
                                                className={styles.icon}
                                            >
                                                <Image
                                                    src={icon01}
                                                    alt="HPへのアイコン"
                                                    className={styles.icon8}
                                                />
                                            </button>
                                        ) : (
                                            <span className={styles.noIcon}>なし</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className={buttonStyle.Pagination}>
                <button
                    className={buttonStyle.Pagination_Item_Link}
                    onClick={onClickBack}
                    disabled={currentPage === 1}
                >
                    ←
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                        <button
                            key={pageNum}
                            className={`${buttonStyle.Pagination_Item_Link} ${currentPage === pageNum ? buttonStyle.isActive : ""
                                }`}
                            onClick={() => setCurrentPage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}
                <button
                    className={buttonStyle.Pagination_Item_Link}
                    onClick={onClickNaxt}
                    disabled={currentPage === totalPages}
                >
                    →
                </button>
            </div>
        </>
    );
};

export default Qualifications;