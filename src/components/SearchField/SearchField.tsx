import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useState } from 'react';
import { SearchIcon } from '../Icons';


const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <TextField
            sx={{
                maxWidth: "200px", background: "rgb(251, 252, 253)", lineHeight: 1.35714, fontSize: "14px", fontWeight: 400,
                ".css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
                    fontSize: '16px',
                    letterSpacing: "-0.01em",
                    color: "rgb(17, 24, 28)",
                    borderRadius: "8px"
                }
            }}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            size='small'
            InputProps={{
                startAdornment: (
                    <InputAdornment sx={{ color: "rgb(215, 219, 223)" }} position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchComponent;