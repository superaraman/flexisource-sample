import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";

export default function Surveys() {
    const { surveys } = useStateContext();

    const onDeleteClick = () => {
        // if (window.confirm("Are you sure you want to delete this survey?")) {
        //     axiosClient.delete(`/survey/${id}`).then(() => {
        //         getSurveys();
        //         showToast('The survey was deleted');
        //     });
        // }
        console.log('delete button clicked');
    };

    return (
        <PageComponent title="Surveys">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map(survey => (
                    <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}
