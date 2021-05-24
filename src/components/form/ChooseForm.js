import React from 'react'
import YourGreatProject from "./YourGreatProject";
import MeetingForACofee from "./MeetingForACofee";
import BirdsAndBees from "./BirdsAndBees";
import PlanAVideoCall from "./PlanAVideoCall";


function ChooseForm({value}) {
    if(value==1)
        return <YourGreatProject/>
    if(value==2)
        return <MeetingForACofee/>
    if(value==3)
        return <BirdsAndBees/>
    return <PlanAVideoCall/>
}

export default ChooseForm
