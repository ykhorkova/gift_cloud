// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class Calendar extends React.Component{
    render(){
        return(<div className="calendar">
            <div className="calendar-box empty empty2">
                <div className="empty2t">June 2017</div>
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span>1</span>
                <span className="circle" data-title="My 25th birthday!">2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span className="circle" data-title="2 month anniversary!">12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span className="circle" data-title="#MusicMonday - share your favorite song!">22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
                <span className="jzdb"></span>
            </div>
        </div>
                        );
    }
}