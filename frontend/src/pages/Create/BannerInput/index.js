import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { MdCameraAlt } from 'react-icons/md';

import api from '~/services/api';

import mask from '~/assets/mask.png';
import { Container } from './styles';

export default function BannerInput({ imageURL, imageID }) {
    const { defaultValue, registerField } = useField('banner');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        setPreview(imageURL);
        setFile(imageID);
    }, [imageURL, imageID]);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'banner_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="banner">
                <div>
                    <MdCameraAlt size={54} color="rgba(255,255,255,0.3)" />
                    <span>Select a image</span>
                </div>
                <img src={preview || mask} alt="Banner Input" />
                <input
                    type="file"
                    id="banner"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
                {/* <span>Select a image</span> */}
            </label>
        </Container>
    );
}

BannerInput.propTypes = {
    imageURL: PropTypes.string,
    imageID: PropTypes.number,
};
