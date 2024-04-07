import './MyLabel.css';

interface Props { 
    /** 
    * Label text
    */
    label: string;
    /**
    * Size of the label
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Caps
    */
    caps?: boolean;
    /**
    * Color of the label
    */
    color? :'text-primary' |'text-secondary' | 'text-tertiary'
    /**
    * Color of the text
    */
    fontColor? : string; 
}

export const MyLabel = ({ label, size = "normal", color = 'text-secondary', fontColor, caps = false} :Props) => {
    return (
        <div className={`${size} ${color}`} 
        style={{
            textTransform: `${caps? 'uppercase' : 'lowercase'}`,
            color: fontColor

        }}>
            { label }
        </div>
    )
}
