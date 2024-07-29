import React from 'react';

const InfoCard = ({ imageSrc, title, content, ellipseImgSrc }) => {
    const cardStyle = {
        backgroundColor: '#264A57',
        borderRadius: '10px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '40px',
        width: '456px',
        margin: '0 8px',
        fontWeight: 500,
        boxShadow: '0px 35.48px 50.26px 0px #0000000D',
        position: 'relative', // This is necessary for the ellipse image positioning
    };

    const imageStyle = {
        width: '102px',
        height: '102px',
        marginRight: '20px',
    };

    const ellipseImageStyle = {
        position: 'absolute',
        width: '250px', // Adjust size to match the new image
        height: '200px', // Adjust size to match the new image
        top: '-60px', // Adjust positioning from the top
        right: '-80px', // Adjust positioning from the right
        borderRadius: '50%', // Ensure it’s a circle
        overflow: 'hidden', // Ensure overflow is hidden
        //objectFit: 'cover', // Optional: Ensure the image covers the area without distortion
    };

    return (
        <div style={cardStyle}>
            {ellipseImgSrc && <img src={ellipseImgSrc} alt="Ellipse" style={ellipseImageStyle} />}
            <img src={imageSrc} alt={title} style={imageStyle} />
            <div>
                <p style={{
                    margin: 0,
                    fontWeight: '500',
                    fontSize: '30px'

                }}>{title}</p>
                <p style={{
                    margin: 0, color: '#8DD7CF', fontSize: '22px', }}>{content}</p>
            </div>
        </div>
    );
};

export default InfoCard;
