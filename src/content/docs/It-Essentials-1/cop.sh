targetfile='index.mdx'

target_dirs=$(ls -w1 --ignore=*.*)
run_once=0
for dir in $target_dirs; do
    echo "Copying $targetfile to $dir/$targetfile"
    cp $targetfile $dir/$targetfile
    echo "File copied to $dir/$targetfile"
    if [ $run_once -eq 0 ]; then
        echo "Confirm that the file has been copied to the correct location in $dir/$targetfile"
        read
        run_once=1
    fi
done
