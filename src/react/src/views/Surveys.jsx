import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";
import { LinkIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";

export default function Surveys() {
    const { surveys } = useStateContext();

    const onDeleteClick = (id) => {
        // if (window.confirm("Are you sure you want to delete this survey?")) {
        //     axiosClient.delete(`/survey/${id}`).then(() => {
        //         getSurveys();
        //         showToast('The survey was deleted');
        //     });
        // }
        console.log('delete button clicked');
    };

    return (
        <PageComponent title="Surveys"
            buttons={(
                <TButton color="green" href={`/surveys/create`}>
                    <LinkIcon className="h-6 w-6 mr-2" />
                    Create New
              </TButton>
            )}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map(survey => (
                    <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}