删除 end grid index start 之外的文件，然后cmd运行以下命令。（cd在 H:\Personal Web\workouts_page）
 
python run_page/keep_sync.py 18166469941 Tsw990918 --with-gpx --sync-types running cycling hiking

python run_page/gen_svg.py --from-db --title "Running records" --type github --athlete "swtang" --special-distance 5 --special-distance2 10 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 0.5

python run_page/gen_svg.py --from-db --title "Over 5km Runs" --type grid --athlete "swtang"  --output assets/grid.svg --min-distance 5.0 --special-color yellow --special-color2 red --special-distance 5 --special-distance2 10 --use-localtime