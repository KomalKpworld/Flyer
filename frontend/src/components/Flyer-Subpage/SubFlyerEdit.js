
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Table } from '@mui/material'


const SubFlyerEdit = () => {

    const { subflyerId } = useParams();

    const [id, Setid] = useState(null)
    const [type, Settype] = useState("")
    const [rotation, Setrotation] = useState("")
    const [scale, Setscale] = useState("")
    const [is_flipped, Setis_flipped] = useState("")
    const [is_lock, Setis_lock] = useState("")
    const [x, Setx] = useState(0)
    const [y, Sety] = useState('')
    const [height, Setheight] = useState("")
    const [width, Setwidth] = useState("")
    const [order_by, Setorder_by] = useState("")
    const [font_name, Setfont_name] = useState("")
    const [font_size, Setfont_size] = useState("")
    const [font_color, Setfont_color] = useState("")
    const [font_align, Setfont_align] = useState("")
    const [is_bold, Setis_bold] = useState("")
    const [is_underline, Setis_underline] = useState("")
    const [letter_spacing, Setletter_spacing] = useState("")
    const [font_file, Setfont_file] = useState("")
    const [file_font, Setfile_font] = useState("")
    const [font_vertical_spacing, Setfont_vertical_spacing] = useState("")
    const [text, Settext] = useState("")
    const [image_url, Setimage_url] = useState("")
    const [validation, Setval] = useState(false)
    const navigate = useNavigate();
  
    const [postData, SetPost] = useState([]);
    const [error, SetError] = useState('')

    useEffect(() => {
        getFlyer();
    }, []);

    const getFlyer = () => {
        axios.get('http://localhost:3001/get-subflyer/' + subflyerId).then((result) => {
            let data = result.data.data
            Setimage_url(data?.image_url);
            console.log(data)
            SetPost(result.data.data);
        
            Setrotation(data.rotation);
            Setscale(data.scale);
            Setis_flipped(data.is_flipped);
            Setis_lock(data.is_lock);
            Setx(data.x);
            Sety(data.y);
            Setheight(data.height);
            Setwidth(data.width);
            Setorder_by(data.order_by);
            Setfont_name(data.font.font_name);
            Setfont_size(data.font.font_size);
            Setfont_color(data.font.font_color);
            Setfont_align(data.font.font_align);
            Setis_bold(data.font.is_bold);
            Setis_underline(data.font.is_underline);
            Setletter_spacing(data.font.letter_spacing);
            Setfont_file(data.font.font_file);
            Setfile_font(data.font.file_font);
            Setfont_vertical_spacing(data.font_vertical_spacing);
            Settext(data.text);
           


        }).catch((error) => {
            return SetError(error.message)
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { rotation, scale, is_flipped, is_lock, x, y, height,width,order_by, font_name,font_size,font_color, font_align,
            is_bold,is_underline, letter_spacing,font_file,file_font,font_vertical_spacing, text, image_url  }

        await axios.put(`http://localhost:3001/update-subflyer/${subflyerId}`, data).then((response) => {
            console.log(response)
            SetPost(response.data);
            navigate('/sub-flyer')
        }).catch((error) => {
            return SetError(error.message)
        })
        console.log(postData.data)
    }

    return (
        <div style={{ width: '90%', height: '100%', margin: 'auto', marginTop: '150px', }}>


            <div className='mt-40 text-center bg-gray-200 space-x-8' style={{ margin: 'auto', height: '600px', }}>
                <h1 style={{ marginTop: "50px", paddingTop: '20px', paddingBottom: '20px' }} className='font-bold text-2xl'>
                    Update Flyer
                </h1>

                <form onSubmit={handleSubmit} className='text-center' >
                    <div className='col-lg-12  pt-7 pb-7'>
                        <div className='form-group'>
                     
                            <label className='mt-5 ml-6'>   rotation:    </label>
                            <input value={rotation} onChange={e => Setrotation(e.target.value)} type="text" name="name" className='outline  ml-3 ' />
                            <label className='mt-5 ml-6'>   scale:  </label>
                            <input value={scale} onChange={e => Setscale(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6'>    is_flipped:    </label>
                            <input value={is_flipped} onChange={e => Setis_flipped(e.target.value)} type="text" name="name" className='outline ml-3' />
                            <label className='mt-5 ml-6'>       is_lock:      </label>
                            <input value={is_lock} onChange={e => Setis_lock(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6'> x: </label>
                            <input value={x} onChange={e => Setx(e.target.value)} type="text" name="name" className='outline  ml-3' />
                        </div>
                    </div>

                    <div className='col-lg-12 mt-6 pt-7 pb-7'>
                        <div className='form-group'>
                            <label className='mt-5 ml-6' > y: </label>
                            <input value={y} onChange={e => Sety(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' > height:   </label>
                            <input value={height} onChange={e => Setheight(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label  className='mt-5 ml-6'>  width: </label> 
                            <input value={width} onChange={e => Setwidth(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >  order_by: </label>
                            <input value={order_by} onChange={e => Setorder_by(e.target.value)} type="text" name="name" className='outline  ml-3' />
                        
                        
                        </div>
                    </div>

                    <div className='col-lg-12 pt-7 pb-7'>
                        <div className='form-group mt-6 '>
                            <label className='mt-5 ml-6' >  font_name:        </label>                           
                            <input value={font_name} onChange={e => Setfont_name(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label>  font_size: </label>                           
                            <input value={font_size} onChange={e => Setfont_size(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >     font_color: </label>                        
                            <input value={font_color} onChange={e => Setfont_color(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >     font_align:        </label>                          
                            <input value={font_align} onChange={e => Setfont_align(e.target.value)} type="text" name="name" className='outline  ml-3' />
                        </div>
                    </div>
                    <div className='col-lg-12 mt-6 pt-7 pb-7'>
                        <div className='form-group '>
                            <label>   is_bold: </label>                       
                            <input value={is_bold} onChange={e => Setis_bold(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >  is_underline: </label>                      
                            <input value={is_underline} onChange={e => Setis_underline(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >  letter_spacing:        </label>                         
                            <input value={letter_spacing} onChange={e => Setletter_spacing(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label>    font_file: </label>                       
                            <input value={font_file} onChange={e => Setfont_file(e.target.value)} type="text" name="name" className='outline  ml-3' />
                        </div>
                    </div>
                    <div className='col-lg-12 mt-6 pt-7 pb-7'>
                        <div className='form-group '>
                            <label className='mt-5 ml-6' >       file_font: </label>                       
                            <input value={file_font} onChange={e => Setfile_font(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' > font_vertical_spacing:        </label>                        
                            <input value={font_vertical_spacing} onChange={e => Setfont_vertical_spacing(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label>  text: </label>                    
                            <input value={text} onChange={e => Settext(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >  image_url: </label>                         
                            <input value={image_url} onChange={e => Setimage_url(e.target.value)} type="text" name="name" className='outline  ml-3' />

                        </div>
                    </div>
              

                    <div className=''>
                        <div className='form-group '>
                            <Button type='submit' >Update</Button>
                            <Button>
                                <Link to='/sub-flyer' className=''> Back</Link>
                            </Button>

                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}



export default SubFlyerEdit
