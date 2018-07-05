import React,{Component} from 'react';
import axios from 'axios';

class Contests extends Component{

constructor(){

    super();
    this.state = {
        'upComingContests':[],
        'ongoingContests':[]
    };
    this.getAllContests = this.getAllContests.bind(this);
}

getAllContests(){

    axios.get('https://contesttrackerapi.herokuapp.com/android/').then( (response) => {
    return response.data.result;
}
).then((response)=>{
        console.log(response);
    this.setState({'upComingContests':response.upcoming,'ongoingContests':response.ongoing});
})

}


componentDidMount(){

    this.getAllContests();
}



render(){

    const ongoingContests = this.state.upComingContests.map((contest)=>{
        return  <li key = {contest.Name}>
             {contest.Name}
             {contest.Platform}
             {contest.EndTime}
         </li>
     });

     
    const upComingContests = this.state.upComingContests.map((contest,index)=>{
    
       return  <li key ={contest.Name} >
            {contest.Name}
            {contest.Platform}
            {contest.StartTime}
            {contest.EndTime}
        </li>
    });

    

return <div>
    <div>
        <h1><b>Ongoing Contests</b></h1>
        {ongoingContests}
    </div>
    <div>
        <h1><b>Upcoming Contests</b></h1>
        {upComingContests}
    </div>
    </div>

}




}


export {Contests};