let a=[2,3,7,18,11,18,11,22,5,3,7]

for(i=0;i<a.length;i++)
{
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            delete a[i]
        }
    }
}
console.log(a)