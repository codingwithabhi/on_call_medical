import { useState, useEffect } from 'react';
import {smallScreen} from "./constants"

export default function useScreenSize() {
    useEffect(() => {
        window.innerWidth <= smallScreen
            return "smallScreen"
    },[])
}
