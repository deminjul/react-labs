import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { toJpeg } from "html-to-image";

const Text = React.forwardRef((props, ref) => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to edit");

    return (
        <>
            {editMode ? (
                <input
                    ref={ref}
                    onDoubleClick={() => setEditMode(false)}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            ) : (
                <h1 onDoubleClick={() => setEditMode(true)}> {val}</h1>
            )}
        </>
    );
});

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef(); 

    const handleExport = () => {
        if (memeRef.current === null) {
            return;
        }

        const options = {
            quality: 1,
            backgroundColor: "#E0EFFF",
        };

        toJpeg(memeRef.current, options)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "meme.jpeg";
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error("Error exporting image:", error);
            });
    };

    const addText = () => {
        setCount(count + 1);
    };

    return (
        <div
            style={{
                width: "700px",
                padding: "20px",
            }}
            className="meme mb-5"
        >
            {/* Контейнер для экспорта (изображение и текст) */}
            <div ref={memeRef}>
                <img src={params.get("url")} width="460px" alt="Image" />
                {Array(count)
                    .fill(0)
                    .map((_, index) => (
                        <Text key={index} />
                    ))}
            </div>

            {/* Контейнер для кнопок (не будет экспортироваться) */}
            <div>
                <button
                    onClick={addText}
                    style={{
                        backgroundColor: "#FEB8D2",
                        borderColor: "#3E54D1",
                        border: 5,
                        margin: "3% 30px",
                        padding: "7px 40px",
                        fontSize: "20px",
                        borderRadius: "9px",
                    }}
                >
                    Add Text
                </button>

                <button
                    onClick={handleExport}
                    style={{
                        backgroundColor: "#8393F2",
                        borderColor: "#3E54D1",
                        border: 5,
                        margin: "3% 30px",
                        padding: "7px 40px",
                        fontSize: "20px",
                        borderRadius: "9px",
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditPage;