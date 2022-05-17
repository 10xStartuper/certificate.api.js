import React from "react";
// import { connect } from "react-redux";
import axios from "axios";
// import Certificate from './certificate';

export default function Certificate({ request, id }) {

    const text = "Men siz bilan Zamin Education Platformasidan olgan Sertifikatimni ulashishdan mamnunman!"
    return (
        <div className="w-screen h-screen bg-gray-200 flex items-center flex-col m-auto justify-center justify-items-center	">

            <div className="w-screen flex flex-row p-24 h-auto items-center justify-between border-orange-600">
                {request &&
                    <div className="h-auto w-3/5 p-5 bg-white rounded-xl">
                        <img src={`http://localhost:8080/certificates/${id}.png`} alt="certificate" />
                    </div>
                }
                {request ?
                    (<div className="flex items-center flex-col p-24">

                        <h1 className="font-bold text-xl text-center py-5">Ushbu sertifikat ZaminEducation platformasi tomonidan tasdiqlangan</h1>
                        <div className="py-4 my-4 flex space-x-4">
                            <a className="p-5 bg-white rounded-xl hover:bg-blue-600 hover:text-white" href={`https://t.me/share/url?url=${"http://sert.zamineducation.uz/certificate?id=" + id}&text=${text}`}>Telegramda ulashish</a>
                            <a className="p-5 bg-white rounded-xl hover:bg-blue-600 hover:text-white" href={`https://www.facebook.com/sharer/sharer.php?u=${"http://sert.zamineducation.uz/certificate?id=" + id}`}>Facebookda ulashish</a>
                        </div>
                        <a href={`http://localhost:8080/certificates/${id}.png`} download
                            className="w-full border-0 bg-blue-700 rounded-xl text-center text-white px-24 py-4">Sertifikatni Yuklab olish</a>
                    </div>) : (
                        <div className="flex flex-1 text-2xl items-center flex-col p-24">Tegishli sertifikat topilmadi</div>
                    )
                }

            </div>
        </div >
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id;

    const request = await fetch(
        `http:/localhost:8080/certificates/${id}.png`
    ).then((res) => {
        console.log(res.status);
        if (res.status == '404') {
            return false;
        } else {
            return true;
        }
    });
    console.log(request);

    return { props: { id: id, request: request } };
}