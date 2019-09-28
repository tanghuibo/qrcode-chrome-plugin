
/**
 * 存储器
 */
export default {
    /**
     * 移除方法
     */
    removeMethod: null,

    /**
     * 设置移除方法
     * @param {function} removeMethod 
     */
    setRemoveMethod(removeMethod) {
        this.removeMethod = removeMethod;
    }
}