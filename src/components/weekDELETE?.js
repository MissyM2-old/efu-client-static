import React from 'react';
import './css/weeks.css';

export default function Week(props) {
        return ( 
            <div className="column with-delete-btn flex-wrap-row">
                <div>
                    <div>
                        <form>
                            <div className="top-week-container">
                                    <div className="sub-week-container">
                                        <div className="unit-container-green fivepx-margin">
                                                <div className="weeks-item-label week-label likedLeast">Liked Least</div>
                                                <div>
                                                    <div className="item-body">English 101</div>
                                                    <div>
                                                        <div>
                                                            English 101
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                        <div className="unit-container-green fivepx-margin">
                                                <div className="weeks-item-label week-label likedMost">Liked Most</div>
                                                <div>
                                                    <div className="item-body">Math 101</div>
                                                </div>
                                                <div>
                                                        
                                                    </div>
                                        </div>
                                    </div>
                                    <div className="sub-week-container">
                                        <div className="unit-container-green fivepx-margin">
                                                <div className="weeks-item-label week-label mostDifficult">Most Difficult</div>
                                                <div>
                                                    <div className="item-body">English 101</div>
                                                    <div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                    
                                        <div className="unit-container-green fivepx-margin">
                                                <div className="weeks-item-label week-label leastDifficult">Least Difficult</div>
                                                <div>
                                                    <div className="item-body">Art 101</div>
                                                    <div>
                                                        <div>
                                                               
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="item">
                                    <button className="blue-btn center-btn" type="submit" value="Submit">Save Your divions</button>
                            </div> 
                        </form>   
                    </div>
                </div>
                <div>
                   {deleteButton}     
                </div>
            </div>
            );
    }
    
}


