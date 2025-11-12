import styles from "../../styles/components/DiscussionForm.module.css"
import Button from "../shared/Button";
import Input from "../shared/Input";

function DiscussionForm({onClose}){
    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <p className={styles.containerP}>Write discussion topic</p>
                    <Input placeholder="Discussion title"/>
                    <div className={styles.buttons}>
                       <Button label="Return" onClick={onClose}></Button>
                       <Button label="Create" onClick={onClose}></Button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DiscussionForm